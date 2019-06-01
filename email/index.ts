import { ProcessCallbackFunction } from 'bull';
import { IncomingMessage, ServerResponse } from 'http';

import { createQueue } from './queues';
import { sumJobCounts } from './utils';

const defaultResponse = (
  req: IncomingMessage,
  res: ServerResponse,
  queueMap: Record<string, ProcessCallbackFunction<any>>,
) => {
  const queues = Object.keys(queueMap).map(name => {
    const queue = createQueue(name);
    queue.process(queueMap[name]);
    return queue;
  });

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

module.exports = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url === './favicon.ico') return;
  if (req.url === '/sendgrid') return () => {};

  return defaultResponse(req, res, {});
};
