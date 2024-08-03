// src/routes/api/index.ts
import { Router } from 'express';
import registerRoutes from './register';
import loginRoutes from './login';
import getUserRoutes from './getUser';
import { auth } from '../../middlewares/auth';

const router = Router();

router.use('/register', registerRoutes);
router.use('/login', loginRoutes);
router.use('/user', auth,getUserRoutes);

export default router;
