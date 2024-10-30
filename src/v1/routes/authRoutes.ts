import { Router, Request, Response } from "express";
import { createUserController, loginController } from "../../controllers/authController";

const authRouter: Router = Router();

authRouter.post("/register", createUserController);

authRouter.post("/login", loginController);

// expenseRouter.get("/:userId/:month/:year", getExpensesForMonthAndYearController);

// expenseRouter.post("/create", createExpenseController);

// expenseRouter.put("/update", updateExpenseController);

// expenseRouter.delete("/delete", deleteExpenseController);

export default authRouter;
