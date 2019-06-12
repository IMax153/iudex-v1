import { $Keys } from '../../../../lib/ts';

export type Devices = (
  | 'smallMobile'
  | 'mediumMobile'
  | 'largeMobile'
  | 'tablet'
  | 'desktop'
  | 'largeDesktop')[];

export const DEVICES: Devices = [
  'smallMobile',
  'mediumMobile',
  'largeMobile',
  'tablet',
  'desktop',
  'largeDesktop',
];

export const QUERIES = {
  largeDesktop: 'largeDesktop',
  desktop: 'desktop',
  tablet: 'tablet',
  largeMobile: 'largeMobile',
  mediumMobile: 'mediumMobile',
};

export type Queries = $Keys<typeof QUERIES>;
