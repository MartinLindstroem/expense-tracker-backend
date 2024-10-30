import { Request, Response, NextFunction } from "express";
import { HttpException } from "../utils/customError";
const jwt = require("jsonwebtoken");

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.cookies.token;

    if (!token) {
      throw new HttpException(401, "You must log in to access this page");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    req.body.user = decoded;

    next();
  } catch (error) {
    next(new HttpException(401, "Invalid or expired token"));
  }
}

export default authMiddleware;
