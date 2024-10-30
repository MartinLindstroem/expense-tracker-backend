import { Request, Response, NextFunction } from "express";
import { createUser, login } from "../services/authService";
const jwt = require("jsonwebtoken");

export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await createUser(req.body.email, req.body.username, req.body.password);

    res.status(200).json("User successfully created");
  } catch (error) {
    next(error);
  }
};

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await login(req.body.email, req.body.password);

    const token = jwt.sign(
      { userId: user.userId, email: user.email, username: user.username },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 1000,
    });

    res.status(200).json("Log in successfull");
  } catch (error) {
    next(error);
  }
};
