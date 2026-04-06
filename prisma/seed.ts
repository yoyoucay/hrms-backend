import { PrismaClient } from '../src/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';
import 'dotenv/config';

async function main() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL as string });
  const prisma = new PrismaClient({ adapter });

  const hashed = await bcrypt.hash('Admin@1234', 12);

  const employee = await prisma.employees.upsert({
    where: { sEmpID: 'EMP-001' },
    update: {},
    create: {
      sEmpID: 'EMP-001',
      sFullName: 'System Administrator',
      sEmail: 'admin@company.com',
      sDepartment: 'IT',
      sRole: 'Admin',
      iStatus: 1,
    },
  });

  const account = await prisma.accounts.upsert({
    where: { iEmployeeID: employee.iEmployeeID },
    update: {},
    create: {
      iEmployeeID: employee.iEmployeeID,
      iStatus: 1,
    },
  });

  await prisma.passwords.upsert({
    where: { iAccountID: account.iAccountID },
    update: { sPassword: hashed },
    create: {
      iAccountID: account.iAccountID,
      sPassword: hashed,
    },
  });

  console.log('✅ Admin seeded: EMP-001 / Admin@1234');
  await prisma.$disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });