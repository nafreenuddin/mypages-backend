// src/controllers/register.ts
import { Request, Response, NextFunction } from "express";
import { registerUser } from "../utils/dbHelper";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.body;
    const result = await registerUser(user);
    res
      .status(201)
      .json({
        message: "User registered successfully",
        userId: result.insertId,
      });
  } catch (error) {
    next(error);
  }
};
