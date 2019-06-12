import { Request, Response } from 'express';

import { Prisma, User } from './generated/prisma-client';

export interface RequestWithUser extends Request {
  user: User;
}

export interface Context {
  connection: any;
  prisma: Prisma;
  req: RequestWithUser;
  res: Response;
}
