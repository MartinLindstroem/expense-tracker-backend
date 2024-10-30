import { pool } from "../config/db";
import { HttpException } from "../utils/customError";

export const getAllUserExpenses = async (userId: number) => {
  const expenses = await pool.query(
    ` SELECT e.expense_id, e.expense_name, e.expense_amount, c.category_name as category, e.expense_date
FROM expenses e
JOIN categories c ON e.expense_category = c.category_id
WHERE e.user_id = $1
`,
    [userId]
  );

  return expenses;
};

export const getExpensesFromYear = async (userId: string, year: string) => {
  if (isNaN(parseInt(year))) {
    throw new HttpException(400, "Bad Request");
  }
  const jan = new Date(parseInt(year), 0, 1);
  const dec = new Date(parseInt(year), 11, 31);

  const expenses = await pool.query(
    `SELECT e.id, e.expense_name, e.expense_amount, c.category_name as category, e.expense_date
      FROM expenses e
      JOIN categories c ON e.expense_category = c.id
      WHERE e.user_id = $1
      AND e.expense_date BETWEEN $2 AND $3;`,
    [userId, jan, dec]
  );

  return expenses;
};

export const createExpense = async (
  userId: string,
  expense_name: string,
  expense_amount: string,
  dateString: string,
  expense_category: string
) => {
  const date = new Date(dateString);
  if (
    isNaN(parseInt(expense_amount)) ||
    isNaN(parseInt(expense_category)) ||
    isNaN(date.getTime())
  ) {
    throw new HttpException(400, "Invalid data given");
  }

  await pool.query(
    `INSERT INTO expenses (user_id, expense_name, expense_amount, expense_date, expense_category) VALUES ($1, $2, $3, $4, $5)`,
    [userId, expense_name, expense_amount, dateString, expense_category]
  );
};

export const updateExpense = async (
  id: string,
  expense_name: string,
  expense_amount: string,
  dateString: string,
  expense_category: string
) => {
  const date = new Date(dateString);
  if (
    isNaN(parseInt(id)) ||
    isNaN(parseInt(expense_amount)) ||
    isNaN(parseInt(expense_category)) ||
    isNaN(date.getTime())
  ) {
    throw new HttpException(400, "Invalid data given");
  }

  await pool.query(
    `UPDATE expenses SET expense_name=$1, expense_amount=$2, expense_date=$3, expense_category=$4 WHERE expense_id = $5`,
    [expense_name, expense_amount, dateString, expense_category, id]
  );
};

export const deleteExpense = async (id: string) => {
  if (isNaN(parseInt(id))) {
    throw new HttpException(400, "Invalid data given");
  }

  await pool.query(`DELETE FROM expenses WHERE expense_id = $1`, [id]);
};
