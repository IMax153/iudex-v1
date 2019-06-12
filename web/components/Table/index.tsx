import React, { useState, useRef, useEffect, useCallback } from 'react';

import styled, { css } from '../../styles';
import { isBrowser } from '../../lib/browser';
import { StyledTableRow } from './TableRow';
import { StyledTableCell } from './TableCell';
import { StyledTableBody } from './TableBody';

interface Props {
  compact?: boolean;
}

interface InternalProps {
  compact: boolean;
  showShadows: boolean;
  showRight: boolean;
  showLeft: boolean;
}

type StyledTableOuterProps = Pick<InternalProps, 'showShadows' | 'showRight' | 'showLeft'>;
type StyledTableInnerProps = Pick<InternalProps, 'showShadows'>;
type StyledTableProps = Pick<InternalProps, 'compact'>;

const StyledTableOuter = styled.div<StyledTableOuterProps>`
  max-width: 100%;
  width: 100%;
  position: relative;

  &::after,
  &::before {
    content: ' ';
    display: ${({ showShadows }) => (showShadows ? 'block' : 'none')};
    position: absolute;
    width: 16px;
    height: 100%;
    top: 0;
    transition: opacity ${({ theme }) => theme.base.transition.duration.normal} ease-in-out;
  }

  &::after {
    opacity: ${({ showRight }) => (showRight ? '1' : '0')};
    background-image: ${({ theme }) => theme.table.background.shadowRight};
    right: 0;
  }

  &::before {
    opacity: ${({ showLeft }) => (showLeft ? '1' : '0')};
    left: 0;
    background-image: ${({ theme }) => theme.table.background.shadowLeft};
  }
`;

const StyledTableInner = styled.div<StyledTableInnerProps>`
  width: 100%;
  ${({ showShadows }) =>
    showShadows &&
    css`
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    `};
`;

const StyledTable = styled.table<StyledTableProps>`
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  white-space: nowrap;

  & ${StyledTableBody} > ${StyledTableRow} {
    background-color: ${({ theme }) => theme.table.background.default};
    border-bottom: 1px solid ${({ theme }) => theme.table.border.colors.table};
    transition: background-color ${({ theme }) => theme.base.transition.duration.fast} ease-in-out;

    &:nth-of-type(even) {
      background-color: ${({ theme }) => theme.table.background.even};
    }

    &:last-child {
      border: 0;
    }

    &:hover {
      background-color: ${({ theme }) => theme.table.background.hover};
    }
  }

  & ${StyledTableCell} {
    min-height: ${({ compact }) => (compact ? '24px' : '48px')};
    padding: ${({ theme, compact }) =>
      compact ? theme.table.padding.compact : theme.table.padding.default};
  }
`;

export const Table: React.FC<Props> = ({ children, compact = false }) => {
  const [showShadows, setShowShadows] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);

  const outer = useRef<HTMLDivElement | null>(null);
  const inner = useRef<HTMLDivElement | null>(null);
  const table = useRef<HTMLTableElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (table.current && outer.current) {
        const showShadows = table.current.clientWidth > outer.current.clientWidth;
        setShowShadows(showShadows);
        setShowRight(showShadows);
      }
    };

    if (isBrowser) {
      window.addEventListener('resize', handleResize);
      handleResize();
    }

    return () => {
      if (isBrowser) {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const handleScroll = useCallback(() => {
    if (showShadows && outer.current && inner.current && table.current) {
      const showLeft = inner.current.scrollLeft >= 5;
      const showRight =
        outer.current.clientWidth + inner.current.scrollLeft <= table.current.clientWidth;

      setShowLeft(showLeft);
      setShowRight(showRight);
    }
  }, [showShadows]);

  return (
    <StyledTableOuter
      ref={outer}
      showShadows={showShadows}
      showLeft={showLeft}
      showRight={showRight}
    >
      <StyledTableInner ref={inner} onScroll={handleScroll} showShadows={showShadows}>
        <StyledTable compact={compact} ref={table}>
          {children}
        </StyledTable>
      </StyledTableInner>
    </StyledTableOuter>
  );
};

export { TableHead } from './TableHead';
export { TableBody } from './TableBody';
export { TableRow } from './TableRow';
export { TableCell } from './TableCell';
