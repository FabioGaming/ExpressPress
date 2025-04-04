import { execSync } from "child_process";
import prisma from "../config/database";

beforeAll(async () => {
  execSync("npx prisma migrate deploy");
});

afterAll(async () => {
  await prisma.$disconnect();
});
