import { IsString, IsEmail, IsOptional, IsEnum, MaxLength } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @MaxLength(20)
  sEmpID!: string; // Added ! here

  @IsString()
  @MaxLength(100)
  sFullName!: string; // Added ! here

  @IsEmail()
  @IsOptional()
  @MaxLength(255)
  sEmail?: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  sDepartment?: string;

  @IsEnum(['Admin', 'HR', 'Employee'])
  sRole!: string; // Added ! here
}