import React, { useEffect, PropsWithChildren, ComponentElement } from 'react';

import styled, { css, Theme } from '../../../styles';
import { getBreakpointWidth } from '../../../styles/theme/utils/media';
import { TOKENS, Tokens } from '../constants';
import { StyledButton, StyledButtonLink } from '../../Button';
import { WithModalContext, Context } from '../ModalContext';

interface Props extends Context {
  children: React.ReactNode;
  flex?: string[] | string;
}

interface StyledProps {
  flex?: string[] | string;
  isMobileFullPage?: boolean;
}

const getToken = (name: Tokens) => ({ theme }: { theme: Theme }) => {
  const tokens = {
    [TOKENS.backgroundFooter]: theme.modal.footer.colors.background,
    [TOKENS.paddingFooter]: theme.modal.footer.padding.default,
    [TOKENS.paddingFooterDesktop]: theme.modal.footer.padding.desktop,
    [TOKENS.boxShadowActionableInverted]: theme.modal.footer.boxShadow.actionable.inverted,
  };
  return tokens[name];
};

const StyledChild = styled.div<StyledProps>`
  flex: ${({ flex }) => flex};
  box-sizing: border-box;
  padding: 0 ${getToken('paddingFooter')} 0 0;

  ${({ theme }) =>
    theme.utils.media.largeMobile(css`
      flex: none;
    `)};
`;

export const StyledModalFooter = styled.div<PropsWithChildren<StyledProps>>`
  display: flex;
  z-index: 800; // TODO: use z-index framework
  width: 100%;
  background: ${getToken('backgroundFooter')};
  padding: 0 ${getToken('paddingFooter')} ${getToken('paddingFooter')};
  box-sizing: border-box;
  transition: box-shadow ${getToken('boxShadowActionableInverted')} ease-in-out;

  @media (max-width: ${({ theme }) =>
      Number(getBreakpointWidth('largeMobile', theme, true)) - 1}px) {
    ${StyledButton},
    ${StyledButtonLink} {
      font-size: ${({ theme }) => theme.button.fontSize.normal};
      height: ${({ theme }) => theme.button.height.normal};
    }
  }

  ${({ theme, children, isMobileFullPage }) =>
    theme.utils.media.largeMobile(css`
      justify-content: ${Array.isArray(children) && children.length > 1
        ? 'space-between'
        : 'flex-end'};
      border-bottom-left-radius: ${!isMobileFullPage && getToken('paddingFooterDesktop')};
      border-bottom-right-radius: ${!isMobileFullPage && getToken('paddingFooterDesktop')};
    `)};

  ${StyledChild}:last-of-type {
    padding: 0;
  }
`;

const BaseModalFooter: React.FC<Props> = ({
  children,
  flex = '0 1 auto',
  isMobileFullPage,
  manageFocus,
  setDimensions,
  decideFixedFooter,
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
  }, [setDimensions, decideFixedFooter, manageFocus]);

  return (
    <StyledModalFooter isMobileFullPage={isMobileFullPage}>
      {typeof children === 'object'
        ? //
          // @ts-ignore
          React.Children.map(children, (item: ComponentElement<any, any>, key) => {
            if (item) {
              const childFlex =
                Array.isArray(flex) && flex.length !== 1 ? flex[key] || flex[0] : flex;
              return <StyledChild flex={childFlex}>{<item.type {...item.props} />}</StyledChild>;
            }
            return null;
          })
        : children}
    </StyledModalFooter>
  );
};

export const ModalFooter = WithModalContext(BaseModalFooter);
ModalFooter.displayName = 'ModalFooter';
