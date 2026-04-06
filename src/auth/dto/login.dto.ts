import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'EMP-001',
    description: 'Unique employee code used as login identifier',
  })
  @IsString()
  @IsNotEmpty()
  empCode: string;

  @ApiProperty({
    example: 'P@ssw0rd!',
    description: 'Account password (min 6 characters)',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}