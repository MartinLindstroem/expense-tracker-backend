import { Request, Response, NextFunction } from "express";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../database/categories";

export const getCategoriesController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getCategories(req.params.userId);

    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const createCategoryController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await createCategory(req.body.userId, req.body.category);

    res.status(201).json({ status: 201, message: "Category successfully created" });
  } catch (error) {
    next(error);
  }
};

export const updateCategoryController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await updateCategory(req.body.id, req.body.categoryName, req.body.userId);

    res.status(201).json({ status: 201, message: "Category successfully updated" });
  } catch (error) {
    next(error);
  }
};

export const deleteCategoryController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await deleteCategory(req.body.id, req.body.userId);

    res.status(201).json({ status: 200, message: "Category successfully deleted" });
  } catch (error) {
    next(error);
  }
};
