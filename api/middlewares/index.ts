import { Router } from 'express';

import { cors } from './cors';
import { session } from './session';

const middlewares = Router();

middlewares.use(cors);
middlewares.use(session);

export { middlewares };
