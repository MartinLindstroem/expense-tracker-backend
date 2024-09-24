import express, { Express } from "express";
import "dotenv/config";
import v1Router from "./v1/routes";
import expenseRouter from "./v1/routes/expenseRoutes";
import categoryRouter from "./v1/routes/categoryRoutes";
import errorMiddleware from "./middlewares/errorHandler";

const app: Express = express();
app.use(express.json());
app.use("/api/v1", v1Router);
app.use("/api/v1/expenses", expenseRouter);
app.use("/api/v1/categories", categoryRouter);
app.use(errorMiddleware);

export default app;
