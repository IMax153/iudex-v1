import React from 'react';

import { Appearance, IconOptions } from '../types';
import { Icon } from '../../Icon';

export const getIcon = (appearance: Appearance) => {
  const iconOptions: IconOptions = {
    success: <Icon icon="check-circle" color="white" />,
    error: <Icon icon="exclamation-circle" color="white" />,
    warning: <Icon icon="bell" color="white" />,
    info: <Icon icon="info-circle" color="white" />,
  };

  return iconOptions[appearance];
};
