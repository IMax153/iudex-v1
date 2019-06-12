import React from 'react';

import styled, { Theme } from '../../styles';
import {
  ELEMENT_OPTIONS,
  ElementOptions,
  TYPE_OPTIONS,
  TypeOptions,
  COLOR_OPTIONS,
  ColorOptions,
  TOKENS,
  Tokens,
} from './constants';

interface Props {
  className?: string;
  type?: TypeOptions;
  color?: ColorOptions;
  element?: ElementOptions;
  inverted?: boolean;
  spaceAfter?: 'none' | 'smallest' | 'small' | 'normal' | 'medium' | 'large' | 'largest';
}

export const getHeadingToken = (name: Tokens) => ({
  theme,
  type,
}: {
  theme: Theme;
  type: TypeOptions;
}) => {
  const tokens = {
    [TOKENS.weightHeading]: {
      [TYPE_OPTIONS.display]: theme.heading.fontWeight.display,
      [TYPE_OPTIONS.subtitle]: theme.heading.fontWeight.subtitle,
      [TYPE_OPTIONS.title1]: theme.heading.fontWeight.title1,
      [TYPE_OPTIONS.title2]: theme.heading.fontWeight.title2,
      [TYPE_OPTIONS.title3]: theme.heading.fontWeight.title3,
      [TYPE_OPTIONS.title4]: theme.heading.fontWeight.title4,
      [TYPE_OPTIONS.title5]: theme.heading.fontWeight.title5,
    },
    [TOKENS.sizeHeading]: {
      [TYPE_OPTIONS.display]: theme.heading.fontSize.display,
      [TYPE_OPTIONS.subtitle]: theme.heading.fontSize.subtitle,
      [TYPE_OPTIONS.title1]: theme.heading.fontSize.title1,
      [TYPE_OPTIONS.title2]: theme.heading.fontSize.title2,
      [TYPE_OPTIONS.title3]: theme.heading.fontSize.title3,
      [TYPE_OPTIONS.title4]: theme.heading.fontSize.title4,
      [TYPE_OPTIONS.title5]: theme.heading.fontSize.title5,
    },
  };
  return tokens[name][type];
};

const getColorToken = () => ({ theme, color }: { theme: Theme; color?: ColorOptions }) => {
  const typeTokens = {
    [COLOR_OPTIONS.primary]: theme.text.colors.primary,
    [COLOR_OPTIONS.secondary]: theme.text.colors.secondary,
    [COLOR_OPTIONS.attention]: theme.text.colors.attention,
    [COLOR_OPTIONS.info]: theme.heading.colors.default,
    [COLOR_OPTIONS.success]: theme.text.colors.success,
    [COLOR_OPTIONS.warning]: theme.text.colors.warning,
    [COLOR_OPTIONS.critical]: theme.text.colors.critical,
    [COLOR_OPTIONS.brand]: theme.text.colors.brand,
    [COLOR_OPTIONS.white]: theme.text.colors.white,
  };
  return color && typeTokens[color];
};

const BaseHeading: React.FC<Props> = ({ element: Component = 'h1', className, children }) => (
  <Component className={className}>{children}</Component>
);

export const StyledHeading = styled(BaseHeading)`
  font-family: ${({ theme }) => theme.base.font.family};
  font-size: ${getHeadingToken('sizeHeading')};
  font-weight: ${getHeadingToken('weightHeading')};
  color: ${({ theme, inverted }) => (inverted ? theme.heading.colors.inverted : getColorToken)};
  line-height: ${({ theme }) => theme.heading.lineHeight};
  text-transform: ${({ type }) => type === TYPE_OPTIONS.title5 && 'uppercase'};
  margin: 0;
  margin-bottom: ${({ theme, spaceAfter }) => spaceAfter && theme.utils.spaceAfter(spaceAfter)};
`;

export const Heading: React.FC<Props> = ({
  children,
  type = TYPE_OPTIONS.title1 as TypeOptions,
  color = COLOR_OPTIONS.info as ColorOptions,
  element = ELEMENT_OPTIONS.h1 as ElementOptions,
  inverted = false,
  spaceAfter = 'none',
}) => (
  <StyledHeading
    color={color}
    type={type}
    element={element}
    inverted={inverted}
    spaceAfter={spaceAfter}
  >
    {children}
  </StyledHeading>
);
