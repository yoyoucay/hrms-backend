"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../src/generated/prisma");
const adapter_pg_1 = require("@prisma/adapter-pg");
const bcrypt = __importStar(require("bcrypt"));
require("dotenv/config");
async function main() {
    const adapter = new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL });
    const prisma = new prisma_1.PrismaClient({ adapter });
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
//# sourceMappingURL=seed.js.map