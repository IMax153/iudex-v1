import React, { useEffect } from 'react';

import styled, { css } from '../../../styles';

interface Props {
  expanded?: boolean;
  expandable?: boolean;
  initialExpanded?: boolean;
  onClose?: () => void | Promise<any>;
  onExpand?: () => void | Promise<any>;
  handleToggleSection?: () => void | Promise<any>;
  setInitialExpandedSection?: () => void | Promise<any>;
}

export interface CardContext {
  expandable: boolean;
  expanded: boolean;
  handleToggleSection: () => void;
  onKeyDownHandler: (e: React.KeyboardEvent<HTMLDivElement>) => void | Promise<any>;
}

export const StyledCardSection = styled.div<Props>`
  width: 100%;
  padding: ${({ theme }) => theme.base.spacing.md};
  box-sizing: border-box;
  position: relative;
  background: ${({ theme }) => theme.card.background};

  ${({ theme }) =>
    theme.utils.media.desktop(css`
      padding: ${theme.base.spacing.lg};
    `)}
`;

export const CardSectionContext = React.createContext<CardContext>({
  expandable: false,
  expanded: false,
  handleToggleSection: () => {},
  onKeyDownHandler: () => {},
});

export const CardSection: React.FC<Props> = ({
  children,
  expanded = false,
  expandable = false,
  initialExpanded,
  onClose,
  onExpand,
  handleToggleSection,
  setInitialExpandedSection,
}) => {
  useEffect(() => {
    if (initialExpanded) {
      if (handleToggleSection) handleToggleSection();
      if (setInitialExpandedSection) setInitialExpandedSection();
    }
  }, [initialExpanded, handleToggleSection, setInitialExpandedSection]);

  function injectCallbackAndToggleSection() {
    if (handleToggleSection) handleToggleSection(); // First do toggle

    if (expanded && onClose) {
      // If is expanded -> action is closing
      onClose();
    }

    if (!expanded && onExpand) {
      // if is closed > action is expanding
      onExpand();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.keyCode === 13 || e.keyCode === 32) {
      e.preventDefault();

      injectCallbackAndToggleSection();
    }
  }

  return (
    <StyledCardSection expandable={expandable} expanded={expanded}>
      <CardSectionContext.Provider
        value={{
          expandable,
          expanded,
          handleToggleSection: injectCallbackAndToggleSection,
          onKeyDownHandler: handleKeyDown,
        }}
      >
        {children}
      </CardSectionContext.Provider>
    </StyledCardSection>
  );
};

export { CardSectionHeader } from './CardSectionHeader';
export { CardSectionContent } from './CardSectionContent';
