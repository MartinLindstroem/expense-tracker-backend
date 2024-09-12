import { Request, Response } from "express";
// import { getAllExpensesFromDb } from "../database/expenses";

// const getAllExpenses = async (req: Request, res: Response) => {
//     await getAllExpensesFromDb()
//     res.status(200).json(`Get all expenses for user ${req.params.userId}`);
// }

const getExpensesForYear = (req: Request, res: Response) => {
    res.status(200).json(`Get all expenses for ${req.params.year} for user ${req.params.userId}`);
}

const getExpensesForMonthAndYear = (req: Request, res: Response) => {
    res.status(200).json(`Get all expenses for ${req.params.month} ${req.params.year} for user ${req.params.userId}`);
}

module.exports = {
    // getAllExpenses,
    getExpensesForMonthAndYear,
    getExpensesForYear
}