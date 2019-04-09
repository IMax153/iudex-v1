import Redis from 'ioredis';

const PRODUCTION = process.env.NODE_ENV === 'production';

export const FORGOT_PASSWORD_PREFIX = 'forgot-password:';
export const CONFIRM_USER_PREFIX = 'confirm-user:';

export const redis = PRODUCTION
  ? new Redis({
      host: process.env.REDIS_HOST,
      password: process.env.REDIS_PASSWORD,
      port: Number(process.env.REDIS_PORT),
    })
  : new Redis();
