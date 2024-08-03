// src/routes/api/index.ts
import { Router } from 'express';
import registerRoutes from './register';
import loginRoutes from './login';

const router = Router();

router.use('/register', registerRoutes);
router.use('/login', loginRoutes);

export default router;
