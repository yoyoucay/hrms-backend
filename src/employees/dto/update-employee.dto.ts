import { PartialType } from '@nestjs/swagger';
import { CreateEmployeeDto } from './create-employee.dto';

// PartialType inherits all @ApiProperty and Validation decorators 
// but marks them as optional.
export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}