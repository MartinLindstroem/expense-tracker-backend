import { Router, Request, Response } from "express";
const expenseController = require("../../controllers/expenseController")

const expenseRouter: Router = Router();

expenseRouter.get("/:userId", expenseController.getAllExpenses);

expenseRouter.get("/:userId/:year", expenseController.getExpensesForYear);

expenseRouter.get("/:userId/:month/:year", expenseController.getExpensesForMonthAndYear);

export default expenseRouter;
