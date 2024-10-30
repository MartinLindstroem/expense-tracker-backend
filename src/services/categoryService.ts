import { pool } from "../config/db";
import { HttpException } from "../utils/customError";

export const getCategories = async (userId: string) => {
  const categories = await pool.query(
    ` SELECT id, category_name FROM categories WHERE (user_id=$1) or (user_id is null)`,
    [userId]
  );

  return categories;
};

export const createCategory = async (userId: string, category_name: string) => {
  if (category_name.length === 0) {
    throw new HttpException(400, "Invalid data given");
  }
  await pool.query(`INSERT INTO categories (category_name, user_id) VALUES ($1, $2)`, [
    category_name,
    userId,
  ]);
};

export const updateCategory = async (id: string, category_name: string, user_id: string) => {
  if (isNaN(parseInt(id)) || isNaN(parseInt(user_id)) || category_name.length === 0) {
    throw new HttpException(400, "Invalid data given");
  }

  await pool.query(`UPDATE categories SET category_name=$1 WHERE id = $2 AND user_id = $3`, [
    category_name,
    id,
    user_id,
  ]);
};

export const deleteCategory = async (id: string, user_id: string) => {
  if (isNaN(parseInt(id)) || isNaN(parseInt(user_id))) {
    throw new HttpException(400, "Invalid data given");
  }

  await pool.query(`DELETE FROM categories WHERE id = $1 AND user_id = $2`, [id, user_id]);
};
