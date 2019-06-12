import React from 'react';

import styled, { css, Theme } from '../../../styles';
import { TYPE_OPTIONS, TypeOptions, SIZE_OPTIONS, SizeOptions } from './constants';

interface Props {
  icon?: React.ReactNode;
  size?: SizeOptions;
  type?: TypeOptions;
  external?: boolean;
  href?: string;
  rel?: string;
  tabIndex?: number;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void | Promise<any>;
}

interface InternalProps {
  size: SizeOptions;
  type: TypeOptions;
}

type StyledTextLinkProps = Pick<InternalProps, 'size' | 'type'>;

const getColor = ({ theme, type }: { theme: Theme; type: TypeOptions }) => {
  const tokens = {
    [TYPE_OPTIONS.primary]: theme.textLink.colors.primary,
    [TYPE_OPTIONS.secondary]: theme.textLink.colors.secondary,
  };
  return tokens[type];
};

const getSizeToken = () => ({ theme, size }: { theme: Theme; size: SizeOptions }) => {
  const sizeTokens = {
    [SIZE_OPTIONS.small]: theme.text.fontSize.sm,
    [SIZE_OPTIONS.normal]: theme.text.fontSize.md,
    [SIZE_OPTIONS.large]: theme.text.fontSize.lg,
  };
  return size && sizeTokens[size];
};

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  color: ${getColor};
  transition: color ${({ theme }) => theme.base.transition.duration.fast} ease-in-out;

  & svg {
    width: ${({ theme }) => theme.icon.width.small};
    height: ${({ theme }) => theme.icon.height.small};
  }
`;

export const getLinkStyle = ({ theme, type }: { theme: Theme; type: TypeOptions }) => css`
  // Common styles for TextLink and "a" in Text
  &,
  &:link,
  &:visited {
    color: ${getColor({ theme, type })};
    text-decoration: ${type === 'secondary'
      ? theme.textLink.decoration.secondary
      : theme.textLink.decoration.primary};
  }

  &:hover,
  &:active {
    text-decoration: ${type === 'secondary'
      ? theme.textLink.decoration.secondaryHover
      : theme.textLink.decoration.primaryHover};
    color: ${type === 'secondary'
      ? theme.textLink.colors.secondaryHover
      : theme.textLink.colors.primaryHover};
  }
`;

export const StyledTextLink = styled.a<StyledTextLinkProps>`
  font-family: ${({ theme }) => theme.base.font.family};
  font-weight: ${({ theme }) => theme.textLink.font.weight};
  font-size: ${getSizeToken};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: color ${({ theme }) => theme.base.transition.duration.fast} ease-in-out;

  ${getLinkStyle};

  ${IconContainer} {
    color: ${({ theme, type }) =>
      type === 'secondary'
        ? theme.textLink.colors.secondaryHover
        : theme.textLink.colors.primaryHover};
  }

  &:focus {
    outline-width: 3px;
  }
`;

export const TextLink: React.FC<Props> = ({
  type = TYPE_OPTIONS.primary as TypeOptions,
  size = SIZE_OPTIONS.normal as SizeOptions,
  children,
  href,
  external = false,
  rel,
  icon,
  onClick,
  tabIndex,
}) => {
  const relValues = rel ? rel.split(' ') : [];

  // add noopener and noreferrer whenever external
  if (relValues && external) {
    if (!relValues.includes('noopener')) {
      relValues.push('noopener');
    }
    if (!relValues.includes('noreferrer')) {
      relValues.push('noreferrer');
    }
  }

  return (
    <StyledTextLink
      type={type}
      size={size}
      href={href}
      target={external ? '_blank' : undefined}
      rel={relValues && relValues.join(' ')}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {children}
      {icon && <IconContainer type={type}>{icon}</IconContainer>}
    </StyledTextLink>
  );
};
