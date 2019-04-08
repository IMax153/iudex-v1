import { Request, Response } from 'express';

import { Prisma } from './generated/prisma-client';

export interface Context {
  connection: any;
  prisma: Prisma;
  req: Request;
  res: Response;
}
