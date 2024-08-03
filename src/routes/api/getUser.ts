// src/routes/api/getUser.ts
import { Router } from 'express';
import { getUser } from '../../controllers/user';

const router = Router();

router.get('/:username', getUser);

export default router;