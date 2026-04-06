import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import type { Employees } from '../generated/prisma';

@Injectable()
export class EmployeesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Employees[]> {
    return this.prisma.employees.findMany({
      where: { iStatus: 1 },
      include: { Accounts: true },
    });
  }

  async findOne(id: number): Promise<Employees> {
    const employee = await this.prisma.employees.findUnique({
      where: { iEmployeeID: id },
      include: { Accounts: true },
    });

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return employee;
  }

  async create(data: CreateEmployeeDto, creatorId: number): Promise<Employees> {
    const existing = await this.prisma.employees.findUnique({
      where: { sEmpID: data.sEmpID },
    });

    if (existing) {
      throw new ConflictException('Employee ID already exists');
    }

    return this.prisma.employees.create({
      data: {
        ...data,
        iCreateBy: creatorId,
      },
    });
  }

  async remove(id: number, modifierId: number): Promise<void> {
    // Soft delete approach preferred in HRMS
    await this.prisma.employees.update({
      where: { iEmployeeID: id },
      data: { 
        iStatus: 0,
        iModifyBy: modifierId,
        dtModifyAt: new Date()
      },
    });
  }

  async softDelete(id: number, modifierId: number): Promise<void> {
    const employee = await this.prisma.employees.findUnique({
      where: { iEmployeeID: id },
    });

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }

    await this.prisma.employees.update({
      where: { iEmployeeID: id },
      data: { 
        iStatus: 0,
        iModifyBy: modifierId,
        dtModifyAt: new Date(),
      },
    });
  }
}