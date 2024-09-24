import { Router, Request, Response } from "express";
import {
  getAllExpensesController,
  getExpensesFromYearController,
  getExpensesForMonthAndYearController,
  createExpenseController,
  updateExpenseController,
  deleteExpenseController,
} from "../../controllers/expenseController";

const expenseRouter: Router = Router();

expenseRouter.get("/:userId", getAllExpensesController);

expenseRouter.get("/:userId/:year", getExpensesFromYearController);

expenseRouter.get("/:userId/:month/:year", getExpensesForMonthAndYearController);

expenseRouter.post("/create", createExpenseController);

expenseRouter.put("/update", updateExpenseController);

expenseRouter.delete("/delete", deleteExpenseController);

export default expenseRouter;
