import { createServer, IncomingMessage, ServerResponse } from 'http';
import { EventEmitter } from 'events';
import { QueueOptions, ProcessCallbackFunction } from 'bull';

import { QUEUE_MAP, createQueue } from './queues';
import { sumJobCounts } from './utils';

import console = require('console');

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_EMAIL_SECRET_KEY: string;
      NODE_ENV: 'development' | 'production';
      PORT: string;
      REDIS_HOST: string;
      REDIS_PASSWORD: string;
      REDIS_PORT: string;
      SENDGRID_API_KEY: string;
    }
  }
}

const createWorker = (
  queueMap: Record<string, ProcessCallbackFunction<any>>,
  queueOptions?: QueueOptions,
  requestHandler?: (req: IncomingMessage, res: ServerResponse, defaultResponse: () => void) => void,
) => {
  EventEmitter.defaultMaxListeners =
    Object.keys(queueMap).length + EventEmitter.defaultMaxListeners;

  const queues = Object.keys(queueMap).map(name => {
    const queue = createQueue(name, queueOptions);
    queue.process(queueMap[name]);
    return queue;
  });

  return createServer((req, res) => {
    const defaultResponse = () => {
      res.setHeader('Content-Type', 'application/json');

      // Summarize the data across all the queues
      Promise.all(queues.map(queue => queue.getJobCounts())).then(jobCounts => {
        const data = {
          waiting: sumJobCounts(jobCounts, 'waiting'),
          active: sumJobCounts(jobCounts, 'active'),
          completed: sumJobCounts(jobCounts, 'completed'),
          failed: sumJobCounts(jobCounts, 'failed'),
          delayed: sumJobCounts(jobCounts, 'delayed'),
        };

        res.end(JSON.stringify(data, null, 2));
      });
    };

    if (requestHandler) return requestHandler(req, res, defaultResponse);

    return defaultResponse();
  });
};

const server = createWorker(QUEUE_MAP, {}, (req, res, defaultResponse) => {
  if (req.url === '/favicon.ico') return;

  if (req.url === '/sendgrid') {
    // return handleSendGridWebhooks(req, res);
  } else {
    return defaultResponse();
  }
});

console.log(
  `🗄 Queues open for business ${(process.env.NODE_ENV === 'production' &&
    `at ${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`) ||
    'locally'}`,
);

const PORT = parseInt(process.env.PORT, 10) || 4001;
server.listen(PORT, () => {
  const serverInfo = server.address();

  if (serverInfo && typeof serverInfo !== 'string') {
    console.log(`💉 Healthcheck server running at ${serverInfo.address}:${serverInfo.port}`);
  }
});
