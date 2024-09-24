import { Router, Request, Response } from "express";
import {
  getCategoriesController,
  createCategoryController,
  updateCategoryController,
  deleteCategoryController,
} from "../../controllers/categoryController";

const categoryRouter: Router = Router();

categoryRouter.get("/:userId", getCategoriesController);

categoryRouter.post("/create", createCategoryController);

categoryRouter.put("/update", updateCategoryController);

categoryRouter.delete("/delete", deleteCategoryController);

export default categoryRouter;
