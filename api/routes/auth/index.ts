import { Router } from 'express';

import { facebookRouter } from './facebook';
import { googleRouter } from './google';
import { twitterRouter } from './twitter';
import { logoutRouter } from './logout';

export const authRouter = Router();

authRouter.use('/facebook', facebookRouter);
authRouter.use('/google', googleRouter);
authRouter.use('/twitter', twitterRouter);
authRouter.use('/logout', logoutRouter);
