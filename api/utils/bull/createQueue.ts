import Queue, { QueueOptions } from 'bull';

import { createRedis } from './createRedis';

const client = createRedis();
const subscriber = createRedis();

export const createQueue = (name: string, options?: QueueOptions) => {
  const queue = new Queue(name, {
    createClient: type => {
      switch (type) {
        case 'client':
          return client;
        case 'subscriber':
          return subscriber;
        default:
          return createRedis();
      }
    },
    defaultJobOptions: {
      removeOnComplete: true,
      attempts: 1,
    },
    ...options,
  });

  queue.on('stalled', job => {
    console.error(`Job#${job.id} stalled, processing again.`);
    console.error({ job });
  });

  queue.on('waiting', jobId => {
    queue
      .getJob(jobId)
      .then(job => {
        if (!job) return;
        return job.finished();
      })
      .catch(err => {
        console.error(err);
      });
  });

  queue.on('failed', (job, err) => {
    console.error(`Job#${job.id} failed, with following reason`);
    console.error({ job, err });
  });

  return queue;
};
