import React from 'react';

import { Consumer, Context } from '.';

interface Props {
  children: (context: Context) => React.ReactNode;
}

export const NotificationConsumer: React.FC<Props> = ({ children }) => (
  <Consumer>{context => children(context)}</Consumer>
);

export function withNotificationManager<P>(
  Comp:
    | React.ComponentType<P & { notificationManager: Context }>
    | React.ComponentClass<P & { notificationManager: Context }>
) {
  return (props: P) => (
    <Consumer>{context => <Comp notificationManager={context} {...props} />}</Consumer>
  );
}
