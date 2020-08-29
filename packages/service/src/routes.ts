import { Router } from 'express';
import usersModule from './users';

export const router = Router();

router.use('/users', usersModule.routes);
