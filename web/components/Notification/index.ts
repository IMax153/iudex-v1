import dynamic from 'next/dynamic';

import { NotificationContext } from './context';
import { NotificationConsumer, withNotificationManager } from './context/NotificationConsumer';

const NotificationProvider = dynamic(
  // @ts-ignore
  import('./context/NotificationProvider').then(mod => mod.NotificationProvider),
  { ssr: false }
);

export { NotificationContext, NotificationConsumer, NotificationProvider, withNotificationManager };
