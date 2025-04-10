import { execSync } from "child_process";
import prisma from "../config/database";
import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

beforeAll(async () => {
  execSync("npx prisma migrate deploy");
});

afterAll(async () => {
  await prisma.$disconnect();
});
