import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import { JwtPayload } from './types/jwt-payload.type';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto): Promise<AuthResponseDto> {
    // 1. Find employee by empCode
    const employee = await this.prisma.employee.findUnique({
      where: { sEmpID: dto.empCode },
      include: {
        account: {
          include: {
            password: true,
          },
        },
      },
    });

    if (!employee || employee.iStatus !== 1) {
      throw new NotFoundException('Employee not found or inactive');
    }

    if (!employee.account || employee.account.iStatus !== 1) {
      throw new UnauthorizedException('Account not found or inactive');
    }

    if (!employee.account.password) {
      throw new UnauthorizedException('No password configured for this account');
    }

    // 2. Verify password
    const isPasswordValid = await bcrypt.compare(
      dto.password,
      employee.account.password.sPassword,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // 3. Build JWT payload
    const payload: JwtPayload = {
      sub: employee.account.iAccountID,
      employeeId: employee.iEmployeeID,
      empCode: employee.sEmpID,
      role: employee.sRole ?? 'Employee',
    };

    // 4. Sign token
    const accessToken = await this.jwtService.signAsync(payload);

    return {
      accessToken,
      user: {
        accountId: employee.account.iAccountID,
        employeeId: employee.iEmployeeID,
        empCode: employee.sEmpID,
        fullName: employee.sFullName,
        role: employee.sRole ?? 'Employee',
      },
    };
  }

  async getProfile(user: JwtPayload) {
    const employee = await this.prisma.employee.findUnique({
      where: { iEmployeeID: user.employeeId },
      select: {
        iEmployeeID: true,
        sEmpID: true,
        sFullName: true,
        sEmail: true,
        sDepartment: true,
        sRole: true,
        dtHireDate: true,
      },
    });

    if (!employee) {
      throw new NotFoundException('Employee profile not found');
    }

    return employee;
  }
}