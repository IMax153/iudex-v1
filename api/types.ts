import { Request, Response } from 'express';

import { Prisma } from './generated/prisma-client';

interface RequestWithUser extends Request {
  user: {
    id: string;
    iat: string;
    exp: string;
  };
}

export interface Context {
  connection: any;
  prisma: Prisma;
  req: RequestWithUser;
  res: Response;
}
