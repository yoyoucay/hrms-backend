import { IsString, IsEmail, IsOptional, IsEnum, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({ 
    example: 'EMP-001', 
    description: 'Unique Employee ID' 
  })
  @IsString()
  @MaxLength(20)
  sEmpID!: string;

  @ApiProperty({ 
    example: 'John Doe', 
    description: 'Full name of the employee' 
  })
  @IsString()
  @MaxLength(100)
  sFullName!: string;

  @ApiProperty({ 
    example: 'john.doe@company.com', 
    required: false 
  })
  @IsEmail()
  @IsOptional()
  @MaxLength(255)
  sEmail?: string;

  @ApiProperty({ 
    example: 'Engineering', 
    required: false 
  })
  @IsString()
  @IsOptional()
  @MaxLength(50)
  sDepartment?: string;

  @ApiProperty({ 
    example: 'Admin', 
    enum: ['Admin', 'HR', 'Employee'] 
  })
  @IsEnum(['Admin', 'HR', 'Employee'])
  sRole!: string;
}