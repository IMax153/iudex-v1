import { $Keys } from '../../lib/ts';

export const LAYOUT_OPTIONS = {
  page: 'page',
  dashboard: 'dashboard',
  sideNav: 'sideNav',
  bookends: 'bookends',
};

export type LayoutOptions = $Keys<typeof LAYOUT_OPTIONS>;

const PAGE_LAYOUT_OPTIONS: Record<string, any> = {
  columns: '1fr',
  columnGap: '16px',
  maxWidth: '960px',
  desktop: {
    columnGap: '24px',
  },
  layoutColumns: {
    '0': {},
  },
};

const SIDENAV_LAYOUT_OPTIONS: Record<string, any> = {
  columns: '1fr',
  columnGap: '16px',
  maxWidth: '1200px',
  tablet: {
    columns: 'minmax(150px, 2fr) 7fr',
  },
  desktop: {
    columnGap: '24px',
  },
  layoutColumns: {
    '0': {
      hideOn: ['smallMobile'],
    },
    '1': {},
  },
};

const DASHBOARD_LAYOUT_OPTIONS: Record<string, any> = {
  ...SIDENAV_LAYOUT_OPTIONS,
  maxHeight: '100%',
  maxWidth: '100%',
  tablet: {
    columns: '1fr 7fr',
  },
};

const BOOKENDS_LAYOUT_OPTIONS: Record<string, any> = {
  columns: '1fr',
  columnGap: '16px',
  maxWidth: '1440px',
  tablet: {
    columns: 'minmax(256px, 3fr) 7fr',
  },
  desktop: {
    columnGap: '24px',
  },
  largeDesktop: {
    columns: '256px 1fr 288px',
  },
  layoutColumns: {
    '0': {
      hideOn: ['smallMobile', 'mediumMobile', 'largeMobile'],
    },
    '1': {},
    '2': {
      hideOn: ['smallMobile', 'mediumMobile', 'largeMobile', 'tablet', 'desktop'],
    },
  },
};

export const LAYOUT_SETTINGS = {
  [LAYOUT_OPTIONS.page]: PAGE_LAYOUT_OPTIONS,

  [LAYOUT_OPTIONS.dashboard]: DASHBOARD_LAYOUT_OPTIONS,

  [LAYOUT_OPTIONS.sideNav]: SIDENAV_LAYOUT_OPTIONS,

  [LAYOUT_OPTIONS.bookends]: BOOKENDS_LAYOUT_OPTIONS,
};
