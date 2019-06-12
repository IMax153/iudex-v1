import Redis from 'ioredis';

const config =
  process.env.NODE_ENV === 'production'
    ? {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT, 10),
        password: process.env.REDIS_PASSWORD,
      }
    : { port: parseInt(process.env.REDIS_PORT, 10) }; // Use the local instance of Redis in development by not passing any connection string

export const createRedis = (extraConfig?: Redis.RedisOptions) =>
  new Redis({
    ...config,
    ...extraConfig,
  });
