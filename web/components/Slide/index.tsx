import React, { useState, useEffect } from 'react';
import styled from '../../styles';

interface Props {
  maxHeight: number;
  expanded?: boolean;
}

const getMaxHeight = ({ maxHeight }: Props) => {
  if (maxHeight === 0) return `0px`;
  if (!maxHeight) return undefined;
  return `${maxHeight}px`;
};

export const StyledSlide = styled.div<Props>`
  max-height: ${getMaxHeight};
  transition: max-height ${({ theme }) => theme.base.transition.duration.fast} linear;
`;

export const Slide: React.FC<Props> = ({ children, expanded, maxHeight }) => {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (expanded) {
      setHeight(maxHeight);
    } else {
      setHeight(0);
    }
  }, [expanded, maxHeight]);

  return (
    <StyledSlide maxHeight={height} expanded={expanded}>
      {children}
    </StyledSlide>
  );
};
