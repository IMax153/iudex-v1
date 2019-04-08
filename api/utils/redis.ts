import Redis from 'ioredis';

const PRODUCTION = process.env.NODE_ENV === 'production';

export const FORGOT_PASSWORD_PREFIX = 'forgot-password:';
export const CONFIRM_USER_PREFIX = 'confirm-user:';

export const redis = PRODUCTION ? new Redis(process.env.REDIS_URL) : new Redis();
