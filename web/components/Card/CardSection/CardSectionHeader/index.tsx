import React from 'react';

import styled, { css } from '../../../../styles';
import { CardSectionContext } from '../index';
import { Icon, getHeight } from '../../../Icon';

interface Props {
  actions?: React.ReactNode;
}

interface StyledProps {
  expandable?: boolean;
  expanded?: boolean;
}

const ChevronDownIcon = () => <Icon icon="chevron-down" color="secondary" />;

const StyledCardSectionIconRight = styled(ChevronDownIcon)`
  align-self: center;
  transition: ${({ theme }) => theme.base.transition.duration.fast};
`;

export const StyledCardSectionHeader = styled.div<StyledProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: margin ${({ theme }) => theme.base.transition.duration.fast} linear;
  cursor: ${({ expandable }) => expandable && 'pointer'};
  position: relative;
  min-height: ${({ expandable }) => expandable && getHeight('medium')};
  margin: ${({ theme }) => `-${theme.base.spacing.md}`};
  padding: ${({ theme }) => theme.base.spacing.md};
  margin-bottom: ${({ expanded }) => expanded && 0};

  ${({ theme, expanded }) =>
    theme.utils.media.desktop(css`
      padding: ${theme.base.spacing.lg};
      margin: -${theme.base.spacing.lg};
      margin-bottom: ${expanded && 0};
    `)}

  &:hover {
    background: ${({ theme, expandable }) => expandable && theme.base.palette.cloud.light};
  }

  ${StyledCardSectionIconRight} {
    transform: ${({ expanded }) => expanded && 'rotate(-180deg)'};
    margin-left: ${({ theme }) => theme.base.spacing.md};
  }

  &:focus {
    background: ${({ theme, expandable }) => expandable && theme.base.palette.cloud.light};
    outline: none;
  }
`;

const StyledCardSectionButtons = styled.div<StyledProps>`
  margin-left: ${({ theme }) => theme.base.spacing.lg};
`;

const StyledCardSectionHeaderContent = styled.div<StyledProps>`
  flex: 1;
`;

export const CardSectionHeader: React.FC<Props> = ({ children, actions }) => (
  <CardSectionContext.Consumer>
    {({ expandable, expanded, handleToggleSection, onKeyDownHandler }) => (
      <StyledCardSectionHeader
        expandable={expandable}
        expanded={expanded}
        onClick={expandable ? handleToggleSection : undefined}
        aria-expanded={expandable && expanded}
        role={expandable ? 'button' : undefined}
        tabIndex={expandable ? 0 : undefined}
        onKeyDown={onKeyDownHandler}
      >
        <StyledCardSectionHeaderContent expandable={expandable}>
          {children}
        </StyledCardSectionHeaderContent>
        {actions && <StyledCardSectionButtons>{actions}</StyledCardSectionButtons>}
        {/*
         // @ts-ignore */}
        {!actions && expandable && <StyledCardSectionIconRight size="medium" color="secondary" />}
      </StyledCardSectionHeader>
    )}
  </CardSectionContext.Consumer>
);
