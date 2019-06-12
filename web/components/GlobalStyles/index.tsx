import React from 'react';

import { Normalize } from './Normalize';
import { ProjectStyles } from './ProjectStyles';

export const GlobalStyles = () => (
  <React.Fragment>
    <Normalize />
    <ProjectStyles />
  </React.Fragment>
);
