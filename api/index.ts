import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import { createServer } from 'http';

import { addSecurityMiddleware } from './middlewares/addSecurityMiddleware';
import { middlewares } from './middlewares';
import { CorsOptions } from './middlewares/cors';
import { prisma } from './generated/prisma-client';
import { schema } from './schema';
import { Context } from './types';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CLIENT_URL: string;
      NODE_ENV: 'development' | 'production';
      PORT: string;
      REDIS_HOST: string;
      REDIS_PASSWORD: string;
      REDIS_PORT: string;
      SESSION_SECRET: string;
      SENDGRID_API_KEY: string;
    }
  }
}

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;

const app = Express();

addSecurityMiddleware(app);
app.use(middlewares);

const apolloServer = new ApolloServer({
  schema,
  context: ({ req, res }: Context) => {
    return { req, res, prisma };
  },
});

apolloServer.applyMiddleware({ app, cors: CorsOptions });

const httpServer = createServer(app);

httpServer.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

process.on('unhandledRejection', async err => {
  console.error('Unhandled rejection', err);
  try {
    // capture exception somehow
  } catch (err) {
    // log errors with exception capture
  } finally {
    process.exit(1);
  }
});

process.on('uncaughtException', async err => {
  console.error('Uncaught exception', err);
  try {
    // capture exception somehow
  } catch (err) {
    // log errors with exception capture
  } finally {
    process.exit(1);
  }
});
