// src/controllers/health.ts
import { Request, Response } from 'express';

export const healthCheck = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Server is healthy' });
};
