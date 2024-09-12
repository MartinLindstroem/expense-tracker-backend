import express, { Express } from "express";
import dotenv from "dotenv";
import v1Router from "./v1/routes";
import expenseRouter from "./v1/routes/expenseRoutes";

dotenv.config();

const app: Express = express();
app.use("/api/v1", v1Router);
app.use("/api/v1/expenses", expenseRouter)

export default app;
