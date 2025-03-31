import express, { Request, Response } from "express";

const port: number = Number(process.env.APPLICATION_PORT) ?? 3000;

const app = express();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
