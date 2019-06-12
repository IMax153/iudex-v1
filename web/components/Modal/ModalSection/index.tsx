import React, { useEffect } from 'react';

import styled, { css, Theme } from '../../../styles';
import { TOKENS, Tokens } from '../constants';
import { StyledModalFooter } from '../ModalFooter';
import { WithModalContext, Context } from '../ModalContext';

export type onClose = (
  ev:
    | React.KeyboardEvent<HTMLDivElement>
    | React.SyntheticEvent<HTMLButtonElement>
    | React.MouseEvent,
) => void | Promise<any>;

interface Props extends Context {
  suppressed?: boolean;
}

type StyledModalSectionProps = Pick<Props, 'suppressed' | 'isMobileFullPage'>;

const getToken = (name: Tokens) => ({ theme }: { theme: Theme }) => {
  const tokens = {
    [TOKENS.backgroundSection]: theme.modal.section.colors.background.default,
    [TOKENS.backgroundSectionSuppressed]: theme.modal.section.colors.background.suppressed,
    [TOKENS.borderColorSection]: theme.modal.section.colors.border,
    [TOKENS.paddingSection]: theme.modal.section.padding,
  };
  return tokens[name];
};

export const StyledModalSection = styled.section<StyledModalSectionProps>`
  width: 100%;
  padding: ${getToken('paddingSection')};
  background: ${({ suppressed }) =>
    suppressed
      ? css`
          ${getToken('backgroundSectionSuppressed')}
        `
      : css`
          ${getToken('backgroundSection')}
        `};
  border-bottom: 1px solid ${getToken('borderColorSection')};
  box-sizing: border-box;

  &:first-of-type {
    border-top: ${({ suppressed }) =>
      suppressed && css`1px solid ${getToken('borderColorSection')}`};

    border-top-left-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage &&
      css`
        ${getToken('borderRadiusSection')}
      `};

    border-top-right-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage &&
      css`
        ${getToken('borderRadiusSection')}
      `};

    margin-top: ${({ suppressed, theme }) => suppressed && theme.base.spacing.lg};
  }

  &:last-of-type {
    border-bottom: ${({ suppressed }) =>
      suppressed
        ? `1px solid ${css`
            ${getToken('borderColorSection')}
          `}`
        : '0'};

    border-bottom-left-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage &&
      css`
        ${getToken('borderRadiusSection')}
      `};

    border-bottom-right-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage &&
      css`
        ${getToken('borderRadiusSection')}
      `};

    & ~ ${StyledModalFooter} {
      margin-top: ${({ theme, suppressed }) => suppressed && theme.base.spacing.md};
    }

    &:not(:last-child) {
      border-radius: 0;
    }
  }

  ${({ theme, suppressed }) =>
    theme.utils.media.largeMobile(css`
      padding: ${({ theme }) => theme.base.spacing.xxl};

      &:first-of-type {
        margin-top: ${suppressed && theme.base.spacing.xxl};
      }

      &:last-of-type {
        & ~ ${StyledModalFooter} {
          padding-top: ${!suppressed && '0'};
          margin-top: 0;
        }
      }
    `)};
`;

const BaseModalSection: React.FC<Props> = ({
  children,
  suppressed,
  isMobileFullPage,
  setDimensions,
  decideFixedFooter,
  manageFocus,
  setHasModalSection,
}) => {
  useEffect(() => {
    if (setDimensions) {
      setDimensions();
    }

    if (decideFixedFooter) {
      decideFixedFooter();
    }

    if (manageFocus) {
      manageFocus();
    }

    return () => {
      if (setHasModalSection) {
        setHasModalSection();
      }
    };
  }, [setDimensions, decideFixedFooter, manageFocus, setHasModalSection]);

  return (
    <StyledModalSection suppressed={suppressed} isMobileFullPage={isMobileFullPage}>
      {children}
    </StyledModalSection>
  );
};

export const ModalSection = WithModalContext(BaseModalSection);
ModalSection.displayName = 'ModalSection';
