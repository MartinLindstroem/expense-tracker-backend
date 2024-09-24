import { Request, Response, NextFunction } from "express";
import { HttpException } from "../utils/customError";
import { error } from "console";

function errorMiddleware(
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status: number = error.status ? error.status : 500;
  const message: string = status === 500 ? "Server error" : error.message;
  const errors = error.error;
  res.status(status).send({ status, message, error: errors });
}

export default errorMiddleware;
