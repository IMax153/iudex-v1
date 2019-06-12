import React from 'react';
import { UniversalPortal } from '@jesstelford/react-portal-universal';

import styled, { css } from '../../../styles';

interface Props {
  status: 'entering' | 'entered' | 'exiting' | 'exited' | 'unmounted';
  inverted?: boolean;
  shown?: boolean;
  unmasked?: boolean;
  onClick: () => void;
}

type ContainerProps = Pick<Props, 'shown'> & { entered: boolean };
type RightCSSProps = Pick<Props, 'shown'>;
type LeftCSSProps = Pick<Props, 'shown'>;
type WrapperProps = Pick<Props, 'inverted' | 'shown'>;

const Container = styled.div<ContainerProps>`
  display: flex;
  visibility: ${({ shown }) => (shown ? 'visible' : 'hidden')};
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ entered }) => (entered ? 'rgba(0, 0, 0, .5)' : 'transparent')};
  transition: background-color ${({ theme }) => theme.base.transition.duration.normal} ease-in-out;
  z-index: ${({ theme }) => theme.base.zIndex.modal};
`;

const rightCSS = css<RightCSSProps>`
  right: 0;
  transform: ${({ theme, shown }) =>
    shown ? theme.utils.translate3d('0') : theme.utils.translate3d('480px, 0, 0')};
`;

const leftCSS = css<LeftCSSProps>`
  left: 0;
  transform: ${({ theme, shown }) =>
    shown ? theme.utils.translate3d('-480') : theme.utils.translate3d('-480px, 0, 0')};
`;

const Wrapper = styled.aside<WrapperProps>`
  ${({ inverted }) => (!inverted ? rightCSS : leftCSS)};
  position: absolute;
  top: 0;
  font-weight: ${({ theme }) => theme.base.font.weight.medium};
  font-size: ${({ theme }) => theme.base.font.size.md};
  background: ${({ theme }) => theme.base.palette.white.normal};
  overflow-y: auto;
  height: 100%;
  transition: transform ${({ theme }) => theme.base.transition.duration.normal} ease-in-out;
  box-shadow: 0 6px 16px rgba(46, 53, 59, 0.22), 0 1px 3px rgba(0, 0, 0, 0.09);
  max-width: 320px;
  width: 100%;

  ${({ theme }) =>
    theme.utils.media.tablet(css`
      width: 480px;
    `)};
`;

export const SidebarContainer: React.FC<Props> = ({
  children,
  inverted,
  status,
  unmasked,
  onClick,
}) => {
  return (
    <UniversalPortal selector="#modals">
      <Container
        shown={status !== 'exited'}
        entered={!unmasked && status === 'entered'}
        onClick={() => {
          if (unmasked) return;
          onClick();
        }}
        role="button"
        tabIndex={0}
      >
        <Wrapper shown={status !== 'exiting' && status !== 'exited'} inverted={inverted}>
          {children}
        </Wrapper>
      </Container>
    </UniversalPortal>
  );
};
