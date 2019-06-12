import React, { useState, useEffect } from 'react';

export interface Dimensions {
  containerTop: number;
  containerLeft: number;
  containerHeight: number;
  containerWidth: number;
  popoverHeight: number;
  popoverWidth: number;
  contentHeight: number;
  windowHeight: number;
  windowWidth: number;
}

interface Params {
  containerRef: HTMLDivElement | null;
  popover: React.MutableRefObject<HTMLDivElement | null>;
  content: React.MutableRefObject<HTMLDivElement | null>;
}

type UseDimensions = (params: Params) => Dimensions;

export const useDimensions: UseDimensions = ({ containerRef, popover, content }) => {
  const [positions, setPositions] = useState({
    containerTop: 0,
    containerLeft: 0,
    containerHeight: 0,
    containerWidth: 0,
    popoverHeight: 0,
    popoverWidth: 0,
    windowWidth: 0,
    windowHeight: 0,
    contentHeight: 0,
  });

  useEffect(() => {
    const calculate = () => {
      if (
        containerRef &&
        popover &&
        popover.current &&
        content &&
        content.current &&
        typeof window !== 'undefined'
      ) {
        const containerDimensions = containerRef.getBoundingClientRect(); // props.containerRef is passed with .current
        const popoverDimensions = popover.current.getBoundingClientRect();

        const contentHeight = content.current && content.current.getBoundingClientRect().height;

        setPositions({
          containerTop: containerDimensions.top,
          containerLeft: containerDimensions.left,
          containerHeight: containerDimensions.height,
          containerWidth: containerDimensions.width,
          popoverHeight: popoverDimensions.height,
          popoverWidth: popoverDimensions.width,
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          contentHeight,
        });
      }
    };

    calculate();

    window.addEventListener('resize', calculate);
    return () => {
      window.removeEventListener('resize', calculate);
    };
  }, [containerRef, content, popover]);

  return positions;
};
