// src/controllers/login.ts
import { Request, Response, NextFunction } from 'express';
import { getUserByUsername, loginUser } from '../utils/dbHelper';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
    const user = await loginUser(username, password) as any[];

    if (user.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user[0].id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    next(error);
  }
};
