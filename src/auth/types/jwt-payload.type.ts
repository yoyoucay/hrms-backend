export type JwtPayload = {
  sub: number;        // iAccountID
  employeeId: number; // iEmployeeID
  empCode: string;    // sEmpID  e.g. "EMP-001"
  role: string;       // sRole   e.g. "Admin" | "HR" | "Employee"
};