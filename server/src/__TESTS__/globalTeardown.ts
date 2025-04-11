import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

const databaseName = process.env.DATABASE_URL?.split("/").at(-1)?.split("?")[0];
export default async () => {
  const pgClient = new Client({
    connectionString: process.env.DATABASE_URL?.replace(
      databaseName as string,
      "postgres",
    ),
  });
  await pgClient.connect();
  await pgClient.query(`DROP DATABASE IF EXISTS ${databaseName}`);
  await pgClient.end();
};
