import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import type { JwtPayload } from './types/jwt-payload.type';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto): Promise<AuthResponseDto> {
    const employee = await this.prisma.employees.findUnique({
      where: { sEmpID: dto.empCode },
      include: {
        Accounts: {
          include: { Passwords: true },
        },
      },
    });

    if (!employee || employee.iStatus !== 1) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const account = employee.Accounts;
    if (!account || account.iStatus !== 1) {
      throw new UnauthorizedException('Account is inactive or not found');
    }

    const passwordRecord = account.Passwords;
    if (!passwordRecord) {
      throw new UnauthorizedException('No password configured for this account');
    }

    const isMatch = await bcrypt.compare(dto.password, passwordRecord.sPassword);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayload = {
      sub: account.iAccountID,
      employeeId: employee.iEmployeeID,
      empCode: employee.sEmpID,
      role: employee.sRole ?? 'Employee',
    };

    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
      user: {
        accountId: account.iAccountID,
        employeeId: employee.iEmployeeID,
        empCode: employee.sEmpID,
        fullName: employee.sFullName,
        role: employee.sRole ?? 'Employee',
      },
    };
  }

  async getProfile(user: JwtPayload): Promise<object> {
    const employee = await this.prisma.employees.findUnique({
      where: { iEmployeeID: user.employeeId },
      select: {
        iEmployeeID: true,
        sEmpID: true,
        sFullName: true,
        sEmail: true,
        sDepartment: true,
        sRole: true,
        dtHireDate: true,
        iStatus: true,
      },
    });

    if (!employee || employee.iStatus !== 1) {
      throw new UnauthorizedException('Employee not found or inactive');
    }

    return {
      accountId: user.sub,
      employeeId: employee.iEmployeeID,
      empCode: employee.sEmpID,
      fullName: employee.sFullName,
      email: employee.sEmail,
      department: employee.sDepartment,
      role: employee.sRole,
      hireDate: employee.dtHireDate,
    };
  }
}