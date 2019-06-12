import { Router } from 'express';

import { googleRouter } from './google';
import { logoutRouter } from './logout';

export const authRouter = Router();

authRouter.use('/google', googleRouter);
authRouter.use('/logout', logoutRouter);
