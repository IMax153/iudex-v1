import React, { useState, useRef, useEffect, PropsWithChildren } from 'react';

import styled, { css } from '../../../../styles';
import { isBrowser } from '../../../../lib/browser/isBrowser';
import { CardSectionContext } from '../index';
import { Slide, StyledSlide } from '../../../Slide';

interface Props {
  expanded?: boolean;
  expandable?: boolean;
  visible?: boolean;
  contentHeight?: number;
}

const hasPaddingTop = ({ expandable, expanded, visible }: Props) =>
  expanded || visible || !expandable;

export const StyledCardSectionContent = styled.div<Props>`
  font-family: ${({ theme }) => theme.base.font.family};
  font-size: ${({ theme }) => theme.text.fontSize.md};
  line-height: ${({ theme }) => theme.text.lineHeight};
  color: ${({ theme }) => theme.text.colors.primary};
  border-top: ${({ theme, expanded }) =>
    expanded
      ? `1px solid ${theme.base.palette.cloud.normal}`
      : `0px solid ${theme.base.palette.cloud.normal}`};
  padding-top: ${({ theme, expandable, expanded, visible }) =>
    hasPaddingTop({ expandable, expanded, visible }) && theme.base.spacing.md};
  transition: padding ${({ theme }) => theme.base.transition.duration.fast} linear,
    border-top ${({ theme }) => theme.base.transition.duration.fast} linear;
  overflow: hidden;

  ${({ theme, expandable, expanded, visible }) =>
    theme.utils.media.desktop(css`
      padding-top: ${hasPaddingTop({ expandable, expanded, visible }) && theme.base.spacing.lg};
    `)}

  ${StyledSlide} {
    max-height: ${({ expandable, visible }) => expandable && visible && 'none'};
  }
`;

/* eslint-disable react/display-name */
const withConsumer = (CardSection: React.FC<Props>) => ({
  children,
  visible,
}: PropsWithChildren<Props>) => (
  <CardSectionContext.Consumer>
    {({ expandable, expanded }) => (
      <CardSection expandable={expandable} expanded={expanded} visible={visible}>
        {children}
      </CardSection>
    )}
  </CardSectionContext.Consumer>
);

const BaseCardSectionContent: React.FC<Props> = ({ children, expanded, expandable, visible }) => {
  const [height, setHeight] = useState<number>(0);
  const node = useRef<any | HTMLDivElement>(null);

  useEffect(() => {
    const setContentHeight = () => {
      if (node && node.current) {
        setHeight(node.current.clientHeight);
      }
    };

    if (expandable && isBrowser) {
      window.addEventListener('resize', setContentHeight);
      setContentHeight();
    }

    return () => {
      if (isBrowser) {
        window.removeEventListener('resize', setContentHeight);
      }
    };
  }, [expandable]);

  return (
    <StyledCardSectionContent
      expanded={expanded}
      expandable={expandable}
      visible={visible}
      contentHeight={height}
    >
      {expandable ? (
        <Slide maxHeight={height} expanded={expanded}>
          <div ref={node}>{children}</div>
        </Slide>
      ) : (
        <div ref={node}>{children}</div>
      )}
    </StyledCardSectionContent>
  );
};

export const CardSectionContent = withConsumer(BaseCardSectionContent);
