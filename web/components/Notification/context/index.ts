import { createContext } from 'react';

import { NotificationsType, AddNotificationFn, RemoveNotificationFn } from '../types';

export interface Context {
  add: AddNotificationFn;
  remove: RemoveNotificationFn;
  notifications: NotificationsType;
}

export const NotificationContext = createContext<Context>({} as any);
export const Consumer = NotificationContext.Consumer; // eslint-disable-line prefer-destructuring
export const Provider = NotificationContext.Provider; // eslint-disable-line prefer-destructuring
