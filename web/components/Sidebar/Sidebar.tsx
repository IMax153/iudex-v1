import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { SidebarContainer } from './SidebarContainer';

const DURATION = 250;

interface Props {
  inverted?: boolean;
  unmasked?: boolean;
}

export const Sidebar: React.FC<Props> = ({ children, inverted, unmasked }) => {
  const [shown, setShown] = useState(false);

  return (
    <React.Fragment>
      <Button bordered type="white" onClick={() => setShown(true)}>
        <Icon icon="bars" color="white" />
      </Button>

      <Transition in={shown} timeout={DURATION}>
        {status => (
          <SidebarContainer
            status={status}
            inverted={inverted}
            onClick={() => setShown(false)}
            unmasked={unmasked}
          >
            {children}
          </SidebarContainer>
        )}
      </Transition>
    </React.Fragment>
  );
};
