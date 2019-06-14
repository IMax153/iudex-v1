import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import { createServer } from 'http';

import { prisma } from './generated/prisma-client';
import { addSecurityMiddleware } from './middlewares/addSecurityMiddleware';
import { middlewares } from './middlewares';
import { CorsOptions } from './middlewares/cors';
import { passport } from './modules/authentication';
import { authRouter } from './routes/auth';
import { schema } from './schema';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CLIENT_URL: string;
      IS_NOW: string;
      NODE_ENV: 'development' | 'production';
      PORT: string;
      REDIS_HOST: string;
      REDIS_PASSWORD: string;
      REDIS_PORT: string;
      SESSION_SECRET: string;
      FACEBOOK_OAUTH_CLIENT_ID: string;
      FACEBOOK_OAUTH_CLIENT_SECRET: string;
      GOOGLE_OAUTH_CLIENT_ID: string;
      GOOGLE_OAUTH_CLIENT_SECRET: string;
      TWITTER_OAUTH_CLIENT_ID: string;
      TWITTER_OAUTH_CLIENT_SECRET: string;
      SENDGRID_API_KEY: string;
    }
  }
}

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;

const app = Express();

passport.initialize();

addSecurityMiddleware(app);

app.set('trust proxy', 1);
app.use(middlewares);
app.use('/api/auth', authRouter);

const apolloServer = new ApolloServer({
  schema,
  context: ({ req, res }) => {
    return { req, res, prisma };
  },
});

apolloServer.applyMiddleware({
  app,
  path: process.env.NODE_ENV === 'production' ? '/api/graphql' : '/graphql',
  cors: CorsOptions,
});

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
