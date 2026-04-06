import { ApiBearerAuth, ApiOperation, ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { JwtPayload } from '../auth/types/jwt-payload.type';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employees')
@UseGuards(JwtAuthGuard, RolesGuard)
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  @Roles('Admin', 'HR')
  async findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.findOne(id);
  }

  @Post()
  @Roles('Admin', 'HR')
  @ApiOperation({ summary: 'Create a new employee' })
  // Swagger will automatically pick up CreateEmployeeDto,
  // but you can be explicit if you want a custom example:
  @ApiBody({ type: CreateEmployeeDto })
  async create(
    @Body() createEmployeeDto: CreateEmployeeDto,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.employeesService.create(createEmployeeDto, user.employeeId);
  }

  @Patch(':id')
  @Roles('Admin', 'HR')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Update specific employee fields' })
  @ApiResponse({ status: 200, description: 'Employee updated successfully' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.employeesService.update(id, updateEmployeeDto, user.employeeId);
  }
  
  @Delete(':id')
  @Roles('Admin')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.employeesService.softDelete(id, user.employeeId);
  }
}
