import React, { useRef, useEffect } from 'react';

import styled, { css, keyframes, Theme } from '../../../styles';
import { Button } from '../../Button';
import { Anchors, Positions, TOKENS, Tokens } from '../constants';
import {
  resolvePopoverPosition,
  resolvePopoverHorizontal,
  calculatePopoverPosition,
} from '../helpers';
import { useDimensions, useVerticalPosition, useHorizontalPosition } from '../hooks';

interface Props {
  containerRef: HTMLDivElement | null;
  preferredPosition: Positions;
  noPadding?: boolean;
  closeOnContentClick?: boolean;
  closeText?: string;
  width?: string;
  onClose: () => void;
}

interface InternalProps {
  anchor: Anchors;
  containerTop: number;
  containerLeft: number;
  containerHeight: number;
  containerWidth: number;
  popoverHeight: number;
  popoverWidth: number;
  position: Positions;
  noPadding: boolean;
  width?: string;
}

type StyledPopoverParentProps = InternalProps;
type StyledPopoverCloseProps = Pick<InternalProps, 'noPadding'>;

const getToken = (name: Tokens) => ({ theme }: { theme: Theme }) => {
  const tokens = {
    [TOKENS.background]: theme.popover.background.default,
    [TOKENS.borderTopLeftRadius]: theme.popover.border.topLeftRadius,
    [TOKENS.borderTopRightRadius]: theme.popover.border.topRightRadius,
    [TOKENS.boxShadow]: theme.popover.boxShadow,
  };
  return tokens[name];
};

const showAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const opacityAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledPopoverParent = styled.div<StyledPopoverParentProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  border-top-left-radius: ${getToken('borderTopLeftRadius')};
  border-top-right-radius: ${getToken('borderTopRightRadius')};
  animation: ${showAnimation} ${({ theme }) => theme.base.transition.duration.fast} linear;
  background-color: ${getToken('background')};
  padding: ${({ noPadding }) => (noPadding ? 0 : getToken('padding'))};
  box-shadow: ${getToken('boxShadow')};
  overflow: hidden;
  z-index: 1000;

  &:focus {
    outline: 0;
  }

  ${({ theme }) =>
    theme.utils.media.largeMobile(css<StyledPopoverParentProps>`
      position: absolute;
      left: auto;
      right: auto;
      bottom: auto;
      width: ${({ width }) => (width ? `${width}` : 'auto')};
      animation: ${opacityAnimation} ${({ theme }) => theme.base.transition.duration.fast} linear;
      border-radius: ${({ theme }) => theme.base.borderRadius};
      ${resolvePopoverPosition}
      ${resolvePopoverHorizontal}
    `)}
`;

const StyledPopoverContent = styled.div``;

const StyledOverlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(23, 27, 30, 0.6);
  animation: ${opacityAnimation} ${({ theme }) => theme.base.transition.duration.fast} ease-in;
  z-index: 999;

  ${({ theme }) =>
    theme.utils.media.largeMobile(css`
      background-color: transparent;
    `)};
`;

const StyledPopoverClose = styled.div<StyledPopoverCloseProps>`
  padding: ${({ noPadding }) => (noPadding ? getToken('padding') : 0)};
  padding-top: ${getToken('padding')};

  ${({ theme }) =>
    theme.utils.media.largeMobile(css`
      display: none;
      visibility: hidden;
      padding-bottom: 0;
    `)}
`;

export const PopoverContent: React.FC<Props> = ({
  children,
  onClose,
  width,
  preferredPosition,
  containerRef,
  noPadding = false,
  closeOnContentClick = false,
}) => {
  const popover = useRef<HTMLDivElement | null>(null);
  const content = useRef<HTMLDivElement | null>(null);
  const overlay = useRef<HTMLDivElement | null>(null);
  const position = calculatePopoverPosition(preferredPosition);
  const dimensions = useDimensions({ containerRef, popover, content });
  const verticalPosition = useVerticalPosition(position[0], dimensions);
  const horizontalPosition = useHorizontalPosition(position[1], dimensions);

  const handleClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    ev.stopPropagation();

    if (ev.target === overlay.current) {
      onClose();
    }

    if (
      closeOnContentClick &&
      content.current &&
      ev.target instanceof Node &&
      content.current.contains(ev.target)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (popover.current) {
      popover.current.focus();
    }
  }, []);

  return (
    <React.Fragment>
      <StyledOverlay ref={overlay} onClick={handleClick} />
      <StyledPopoverParent
        anchor={horizontalPosition}
        position={verticalPosition}
        containerTop={dimensions.containerTop}
        containerLeft={dimensions.containerLeft}
        containerHeight={dimensions.containerHeight}
        containerWidth={dimensions.containerWidth}
        popoverHeight={dimensions.popoverHeight}
        popoverWidth={dimensions.popoverWidth}
        width={width}
        ref={popover}
        onClick={handleClick}
        tabIndex={0}
        noPadding={noPadding}
        role="tooltip"
      >
        <StyledPopoverContent ref={content} onClick={handleClick}>
          {children}
          <StyledPopoverClose noPadding={noPadding}>
            <Button type="secondary" block onClick={onClose}>
              Close
            </Button>
          </StyledPopoverClose>
        </StyledPopoverContent>
      </StyledPopoverParent>
    </React.Fragment>
  );
};
