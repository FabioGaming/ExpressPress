import dotenv from "dotenv";
import app from "./app";
import prisma from "./config/database";

dotenv.config();

const PORT = process.env.APPLICATION_PORT || 3000;

async function startServer() {
  try {
    prisma.$connect();
    console.log("Database connection successful!");

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.log("Unable to connect to database, stopping server.");
    process.exit(1);
  }
}
