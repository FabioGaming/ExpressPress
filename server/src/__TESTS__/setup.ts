import { execSync } from "child_process";
import prisma from "../config/database";
import dotenv from "dotenv";

dotenv.config({ path: ".test.env" });

beforeAll(async () => {
  execSync("npx prisma migrate deploy");
});

afterAll(async () => {
  await prisma.$disconnect();
});
