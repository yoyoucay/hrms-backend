import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  accessToken!: string;

  @ApiProperty({
    example: {
      accountId: 1,
      employeeId: 42,
      empCode: 'EMP-001',
      fullName: 'John Doe',
      role: 'HR',
    },
  })
  user!: {
    accountId: number;
    employeeId: number;
    empCode: string;
    fullName: string;
    role: string;
  };
}