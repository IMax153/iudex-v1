import React from 'react';

export interface NotificationOptions {
  appearance?: 'error' | 'info' | 'warning' | 'success';
  autoDismiss?: boolean;
  pauseOnHover?: boolean;
  onDismiss?: (id: string) => void;
}

export type NotificationCallback = (id: string) => void;

export type AddNotificationFn = (content: React.ReactNode, options?: NotificationOptions) => void;

export type RemoveNotificationFn = (id: string) => void;

export type NotificationType = NotificationOptions & { content?: React.ReactNode; id: string };
export type NotificationsType = NotificationType[];

export interface NotificationAction {
  type: 'ADD' | 'REMOVE';
  payload: NotificationType;
}

export interface NotificationState {
  notifications: NotificationsType;
}

export type HoverFn = () => void;

export type Placement =
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'top-left'
  | 'top-center'
  | 'top-right';

export interface PlacementDetails {
  top?: number;
  left?: number | string;
  bottom?: number;
  right?: number;
  transform?: string;
}

export type PlacementOptions = { [key in Placement]: PlacementDetails };

export type Appearance = 'success' | 'error' | 'warning' | 'info';

export interface AppearanceDetails {
  text: string;
  fg: string;
  bg: string;
}

export type AppearanceOptions = { [key in Appearance]: AppearanceDetails };
export type IconOptions = { [key in Appearance]: React.ReactNode };

export type TranslateDirection = 'top' | 'right' | 'bottom' | 'left';

export type TranslateOptions = { [key in TranslateDirection]: string };

export type TransitionState = 'entering' | 'entered' | 'exiting' | 'exited' | 'unmounted';

export type TransitionStateOptions = { [key in TransitionState]: string };
