import React from 'react';

import styled, { Theme } from '../../styles';
import { SpacingsType } from '../../styles/theme/utils/spaceAfter';
import { StyledTextLink, getLinkStyle } from './TextLink';
import {
  TYPE_OPTIONS,
  TypeOptions,
  WEIGHT_OPTIONS,
  WeightOptions,
  SIZE_OPTIONS,
  SizeOptions,
  ELEMENT_OPTIONS,
  ElementOptions,
} from './constants';

interface Props {
  type?: TypeOptions;
  size?: SizeOptions;
  element?: ElementOptions;
  spaceAfter?: SpacingsType;
  weight?: WeightOptions;
  italic?: boolean;
  uppercase?: boolean;
  className?: string;
}

const getTypeToken = () => ({ theme, type }: { theme: Theme; type?: TypeOptions }) => {
  const typeTokens = {
    [TYPE_OPTIONS.primary]: theme.text.colors.primary,
    [TYPE_OPTIONS.secondary]: theme.text.colors.secondary,
    [TYPE_OPTIONS.attention]: theme.text.colors.attention,
    [TYPE_OPTIONS.info]: theme.text.colors.info,
    [TYPE_OPTIONS.success]: theme.text.colors.success,
    [TYPE_OPTIONS.warning]: theme.text.colors.warning,
    [TYPE_OPTIONS.critical]: theme.text.colors.critical,
    [TYPE_OPTIONS.white]: theme.text.colors.white,
  };
  return type && typeTokens[type];
};

const getWeightToken = () => ({ theme, weight }: { theme: Theme; weight?: WeightOptions }) => {
  const weightTokens = {
    [WEIGHT_OPTIONS.normal]: theme.text.fontWeight.normal,
    [WEIGHT_OPTIONS.bold]: theme.text.fontWeight.bold,
  };
  return weight && weightTokens[weight];
};

const getSizeToken = () => ({ theme, size }: { theme: Theme; size?: SizeOptions }) => {
  const sizeTokens = {
    [SIZE_OPTIONS.small]: theme.text.fontSize.sm,
    [SIZE_OPTIONS.normal]: theme.text.fontSize.md,
    [SIZE_OPTIONS.large]: theme.text.fontSize.lg,
  };
  return size && sizeTokens[size];
};

const StyledTextComponent: React.FC<Props> = ({
  element: TextElement = 'p',
  children,
  spaceAfter,
  className,
  ...rest
}) => (
  <TextElement className={className} {...rest}>
    {children}
  </TextElement>
);

export const StyledText = styled(StyledTextComponent)`
  font-family: ${({ theme }) => theme.base.font.family};
  font-size: ${getSizeToken};
  font-weight: ${getWeightToken()};
  color: ${getTypeToken()};
  line-height: ${({ theme }) => theme.text.lineHeight};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  font-style: ${({ italic }) => italic && `italic`};
  margin: 0;
  margin-bottom: ${({ theme, spaceAfter }) => spaceAfter && theme.utils.spaceAfter(spaceAfter)};

  a:not(${StyledTextLink}) {
    ${({ theme }) => getLinkStyle({ theme, type: 'primary' })}
  }
`;

export const Text: React.FC<Props> = ({
  type = TYPE_OPTIONS.primary as TypeOptions,
  size = SIZE_OPTIONS.normal as SizeOptions,
  element = ELEMENT_OPTIONS.p as ElementOptions,
  weight = WEIGHT_OPTIONS.normal as WeightOptions,
  spaceAfter,
  uppercase = false,
  italic = false,
  children,
}) => (
  <StyledText
    type={type}
    size={size}
    element={element}
    weight={weight}
    uppercase={uppercase || undefined}
    italic={italic || undefined}
    spaceAfter={spaceAfter}
  >
    {children}
  </StyledText>
);

export { TextLink, StyledTextLink } from './TextLink';
