import React, { useState, useRef } from 'react';
import { UniversalPortal } from '@jesstelford/react-portal-universal';

import styled from '../../styles';
import { PopoverContent } from './PopoverContent';
import { Positions } from './constants';

export interface Props {
  content: React.ReactNode;
  preferredPosition?: Positions;
  opened?: boolean;
  closeOnContentClick?: boolean;
  width?: string;
  noPadding?: boolean;
  onOpen?: () => void | Promise<any>;
  onClose?: () => void | Promise<any>;
}

const StyledPopoverChild = styled.div`
  position: relative;
`;

export const Popover: React.FC<Props> = ({
  children,
  content,
  preferredPosition = 'bottom',
  opened,
  closeOnContentClick,
  width,
  noPadding,
  onClose,
  onOpen,
}) => {
  const [shown, setShown] = useState<boolean>(false);
  const container = useRef<HTMLDivElement | null>(null);

  const resolveCallback = () => {
    if (onClose && shown) onClose();
    if (onOpen && !shown) onOpen();
  };

  const handleOut = () => {
    // If open prop is present ignore custom handler
    if (typeof opened === 'undefined') {
      setShown(false);
      resolveCallback();
    }
  };

  const handleClick = () => {
    // If open prop is present ignore custom handler
    if (typeof opened === 'undefined') {
      setShown(!shown);
      resolveCallback();
    }
  };

  return (
    <React.Fragment>
      <StyledPopoverChild onClick={handleClick} ref={container}>
        {children}
      </StyledPopoverChild>
      {(shown || opened) && (
        <UniversalPortal selector="#popovers">
          <PopoverContent
            width={width}
            containerRef={container.current}
            preferredPosition={preferredPosition}
            onClose={handleOut}
            noPadding={noPadding}
            closeOnContentClick={closeOnContentClick}
          >
            {content}
          </PopoverContent>
        </UniversalPortal>
      )}
    </React.Fragment>
  );
};
