import { Queue } from 'bull';

import { QUEUE_NAMES } from './constants';
import { createQueue } from './createQueue';

type QueueName = keyof typeof QUEUE_NAMES;

export const Queues = Object.keys(QUEUE_NAMES).reduce<Record<QueueName, Queue<any>>>(
  (queues, name) => {
    queues[name as QueueName] = createQueue(QUEUE_NAMES[name as QueueName]);
    return queues;
  },
  {} as Record<QueueName, Queue<any>>,
);
