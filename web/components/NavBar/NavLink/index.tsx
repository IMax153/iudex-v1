import React from 'react';

import styled, { css } from '../../../styles';

export type Background = 'white' | 'primary' | 'secondary';
export type Color = 'primary' | 'secondary' | 'warning' | '';

interface Props {
  active?: boolean;
  color?: Color;
  background?: Background;
  bold?: boolean;
  block?: boolean;
  disabled?: boolean;
  transition?: boolean;
  x?: string;
  y?: string;
  as?: 'button' | 'a' | 'div';
  direction?: string;
  padding?: string;
  className?: string;
  marginLeft?: number;
  marginRight?: number;
  fontSize?: number;
  onClick?: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export const NavButton = styled.button<Props>`
  margin: 0;
  padding: 0;
  border: none;
  background: inherit;
  cursor: pointer;
  display: flex;
  color: ${({ theme, color }) =>
    (color === 'primary' && `${theme.base.palette.product.normal}`) ||
    (color === 'secondary' && `${theme.base.palette.ink.normal}`) ||
    (color === 'warning' && `${theme.base.palette.red.normal}`) ||
    theme.base.palette.white.normal};
  cursor: pointer;
  font-weight: ${({ theme, bold }) =>
    bold ? theme.base.font.weight.bold : theme.base.font.weight.medium};
  font-family: ${({ theme }) => theme.base.font.family};
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  background: ${({ theme, background }) =>
    background
      ? (background === 'white' && theme.base.palette.white.normal) ||
        (background === 'primary' && theme.button.background.primary) ||
        (background === 'secondary' && theme.button.background.secondary)
      : `transparent`};
  white-space: nowrap;
  width: ${({ block }) => (block ? `100%` : `auto`)};
  ${({ transition }) =>
    transition &&
    css`
      transition: color 0.2s ease-in-out;
    `};
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `};
  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft}px;
    `};
  ${({ marginRight }) => marginRight && css`margin-right ${marginRight}px`};
  font-size: ${({ fontSize, theme }) => (fontSize ? `${fontSize}px` : `${theme.text.fontSize.sm}`)};
  ${({ x, y, direction }) =>
    x &&
    css`
      justify-content: ${direction === 'column' ? y : x};
    `};
  ${({ x, y, direction }) =>
    y &&
    css`
      align-items: ${direction === 'column' ? x : y};
    `};
  ${({ direction }) =>
    direction &&
    css`
      flex-direction: ${direction};
    `};
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `};

  &:visited,
  &:active,
  &:link {
    color: ${({ theme, color }) =>
      (color === 'primary' && `${theme.base.palette.product.normalActive}`) ||
      (color === 'secondary' && `${theme.base.palette.ink.normalActive}`) ||
      (color === 'warning' && `${theme.base.palette.red.normalActive}`) ||
      theme.base.palette.white.active};
  }

  &:hover {
    color: ${({ theme, color }) =>
      (color === 'primary' && `${theme.base.palette.product.normalHover}`) ||
      (color === 'secondary' && `${theme.base.palette.ink.normalHover}`) ||
      (color === 'warning' && `${theme.base.palette.red.normalHover}`) ||
      theme.base.palette.white.hover};
  }

  &:focus {
    outline: none;
  }
`;

export const NavLink: React.FC<Props> = styled(NavButton)``;
