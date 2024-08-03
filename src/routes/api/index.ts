// src/routes/api/index.ts
import { Router } from 'express';
import registerRoutes from './register';
import loginRoutes from './login';
import getUserRoutes from './getUser';

const router = Router();

router.use('/register', registerRoutes);
router.use('/login', loginRoutes);
router.use('/user', getUserRoutes);

export default router;
