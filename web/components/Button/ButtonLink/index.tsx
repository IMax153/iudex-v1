import React, { PropsWithChildren } from 'react';

import styled, { css, Theme } from '../../../styles';
import { SpacingsType } from '../../../styles/theme/utils/spaceAfter';
import { TYPE_OPTIONS, TypeOptions, SIZE_OPTIONS, SizeOptions, TOKENS, Tokens } from './constants';
import { ICON_SIZES, IconSizes } from '../../Icon/constants';
import { getWidth, getHeight } from '../../Icon';

interface Props {
  component?: string | React.ReactNode;
  icon?: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: TypeOptions;
  size?: SizeOptions;
  sizeIcon?: IconSizes;
  buttonRef?: any;
  spaceAfter?: SpacingsType;
  disabled?: boolean;
  block?: boolean;
  external?: boolean;
  circled?: boolean;
  onlyIcon?: boolean;
  submit?: boolean;
  transparent?: boolean;
  ariaExpanded?: boolean;
  width?: number;
  href?: string;
  className?: string;
  tabIndex?: string;
  ariaControls?: string;
  role?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void | Promise<any>;
}

const getSizeToken = (name: Tokens) => ({ theme, size }: { theme: Theme; size?: SizeOptions }) => {
  const tokens = {
    [TOKENS.heightButton]: {
      [SIZE_OPTIONS.small]: theme.button.height.small,
      [SIZE_OPTIONS.normal]: theme.button.height.normal,
      [SIZE_OPTIONS.large]: theme.button.height.large,
    },
    [TOKENS.fontSizeButton]: {
      [SIZE_OPTIONS.small]: theme.button.fontSize.small,
      [SIZE_OPTIONS.normal]: theme.button.fontSize.normal,
      [SIZE_OPTIONS.large]: theme.button.fontSize.large,
    },
  };
  return size && tokens[name][size];
};

const getTypeToken = (name: Tokens) => ({ theme, type }: { theme: Theme; type?: TypeOptions }) => {
  const tokens = {
    [TOKENS.backgroundButton]: {
      [TYPE_OPTIONS.primary]: theme.button.background.linkPrimary,
      [TYPE_OPTIONS.secondary]: theme.button.background.linkSecondary,
    },
    [TOKENS.backgroundButtonHover]: {
      [TYPE_OPTIONS.primary]: theme.button.background.linkPrimaryHover,
      [TYPE_OPTIONS.secondary]: theme.button.background.linkSecondaryHover,
    },
    [TOKENS.backgroundButtonActive]: {
      [TYPE_OPTIONS.primary]: theme.button.background.linkPrimaryHover,
      [TYPE_OPTIONS.secondary]: theme.button.background.linkSecondaryHover,
    },
    [TOKENS.colorTextButton]: {
      [TYPE_OPTIONS.primary]: theme.button.background.linkPrimary,
      [TYPE_OPTIONS.secondary]: theme.button.background.linkSecondary,
    },
    [TOKENS.colorTextButtonHover]: {
      [TYPE_OPTIONS.primary]: theme.button.background.linkPrimaryHover,
      [TYPE_OPTIONS.secondary]: theme.button.background.linkSecondaryHover,
    },
    [TOKENS.colorTextButtonActive]: {
      [TYPE_OPTIONS.primary]: theme.button.background.linkPrimaryActive,
      [TYPE_OPTIONS.secondary]: theme.button.background.linkSecondaryActive,
    },
  };
  return type && tokens[name][type];
};

const buttonSpacing = () => ({
  theme,
  onlyIcon,
  iconRight,
  iconLeft,
  size,
}: {
  theme: Theme;
  onlyIcon?: boolean;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  size?: SizeOptions;
}) => {
  if (onlyIcon) return theme.button.padding.withoutText;
  const tokens = {
    [TOKENS.paddingButton]: {
      [SIZE_OPTIONS.small]: theme.button.padding.small,
      [SIZE_OPTIONS.normal]: theme.button.padding.normal,
      [SIZE_OPTIONS.large]: theme.button.padding.large,
    },
    [TOKENS.paddingButtonWithIcons]: {
      [SIZE_OPTIONS.small]: theme.button.padding.smallWithIcons,
      [SIZE_OPTIONS.normal]: theme.button.padding.normalWithIcons,
      [SIZE_OPTIONS.large]: theme.button.padding.largeWithIcons,
    },
    [TOKENS.paddingButtonWithLeftIcon]: {
      [SIZE_OPTIONS.small]: theme.button.padding.smallWithLeftIcon,
      [SIZE_OPTIONS.normal]: theme.button.padding.normalWithLeftIcon,
      [SIZE_OPTIONS.large]: theme.button.padding.largeWithLeftIcon,
    },
    [TOKENS.paddingButtonWithRightIcon]: {
      [SIZE_OPTIONS.small]: theme.button.padding.smallWithRightIcon,
      [SIZE_OPTIONS.normal]: theme.button.padding.normalWithRightIcon,
      [SIZE_OPTIONS.large]: theme.button.padding.largeWithRightIcon,
    },
  };
  if (iconLeft && iconRight) {
    return size && tokens[TOKENS.paddingButtonWithIcons][size];
  }
  if (iconLeft && !iconRight) {
    return size && tokens[TOKENS.paddingButtonWithLeftIcon][size];
  }
  if (!iconLeft && iconRight) {
    return size && tokens[TOKENS.paddingButtonWithRightIcon][size];
  }
  return size && tokens[TOKENS.paddingButton][size];
};

const iconSpacing = () => ({
  theme,
  right,
  size,
  onlyIcon,
}: {
  theme: Theme;
  right?: boolean;
  size?: SizeOptions;
  onlyIcon?: boolean;
}) => {
  const tokens = {
    [TOKENS.marginRightIcon]: {
      [SIZE_OPTIONS.small]: theme.button.icon.small,
      [SIZE_OPTIONS.normal]: theme.button.icon.normal,
      [SIZE_OPTIONS.large]: theme.button.icon.large,
    },
  };

  if (onlyIcon) {
    return null;
  }

  return right
    ? size && `0 0 0 ${tokens[TOKENS.marginRightIcon][size]}`
    : size && `0 ${tokens[TOKENS.marginRightIcon][size]} 0 0`;
};

const DummyDiv: React.FC<Omit<Props, 'iconLeft' | 'iconRight'>> = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const IconContainer = styled(DummyDiv)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: ${iconSpacing()};

  > * {
    width: ${({ sizeIcon }) => sizeIcon && getWidth(sizeIcon)};
    height: ${({ sizeIcon }) => sizeIcon && getHeight(sizeIcon)};
  }
`;

const StyledButtonComponent: React.FC<Props> = ({
  onlyIcon,
  component,
  circled,
  external,
  block,
  type,
  icon,
  iconLeft,
  iconRight,
  sizeIcon,
  width,
  children,
  transparent,
  submit,
  buttonRef,
  ariaControls,
  ariaExpanded,
  spaceAfter,
  ...props
}) => {
  const isButtonWithHref = component === 'button' && props.href;
  const Component = (isButtonWithHref ? 'a' : component) as React.ElementType;
  const buttonType = submit ? 'submit' : 'button';

  return (
    <Component
      type={!isButtonWithHref ? buttonType : undefined}
      {...props}
      ref={buttonRef}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
    >
      {children}
    </Component>
  );
};

export const StyledButtonLink = styled(StyledButtonComponent)`
  font-family: ${({ theme }) => theme.base.font.family};
  box-sizing: border-box;
  appearance: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ block, width, onlyIcon }) =>
    block
      ? '100%'
      : (width && `${width}px`) || (onlyIcon && getSizeToken('heightButton')) || 'auto'};
  height: ${getSizeToken('heightButton')};
  background: ${getTypeToken('backgroundButton')};
  color: ${getTypeToken('colorTextButton')}!important;
  border: 0;
  border-radius: ${({ theme, circled }) =>
    circled ? getSizeToken('heightButton') : theme.base.borderRadius};
  padding: ${buttonSpacing()};
  font-weight: ${({ theme }) => theme.base.font.weight.bold}!important;
  font-size: ${getSizeToken('fontSizeButton')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled, theme }) => (disabled ? theme.button.opacity.disabled : '1')};
  transition: all 0.15s ease-in-out !important;
  outline: 0;
  text-decoration: none;
  margin-bottom: ${({ theme, spaceAfter }) => spaceAfter && theme.utils.spaceAfter(spaceAfter)};

  &:hover {
    ${({ transparent, disabled }) =>
      !disabled &&
      css`
        background: ${!transparent && getTypeToken('backgroundButtonHover')};
        color: ${getTypeToken('colorTextButtonHover')}!important;
      `};
  }

  &:active {
    ${({ transparent, disabled, theme }) =>
      !disabled &&
      css`
        transform: scale(${theme.button.scale.active});
        background: ${!transparent && getTypeToken('backgroundButtonActive')};
        color: ${getTypeToken('colorTextButtonActive')}!important;
      `};
  }

  &:focus {
    ${({ disabled, theme }) =>
      !disabled &&
      css`
        box-shadow: 0 0 1px 1px ${theme.button.text.colors.whiteBordered},
          0 0 1px 3px rgba(1, 118, 210, 0.6);
        &:active {
          box-shadow: none;
        }
      `};
  }
`;

export const ButtonLink = React.forwardRef<HTMLAnchorElement, PropsWithChildren<Props>>(
  (props, ref) => {
    const {
      external,
      children,
      component = 'button',
      href,
      size = SIZE_OPTIONS.normal,
      icon,
      iconRight,
      type = TYPE_OPTIONS.primary,
      onClick,
      width = 0,
      role,
    } = props;

    const iconLeft = props.iconLeft || icon;
    const sizeIcon = size === ICON_SIZES.small ? ICON_SIZES.small : ICON_SIZES.medium;

    const onlyIcon = Boolean(iconLeft && !children);

    return (
      <StyledButtonLink
        {...props}
        onClick={onClick}
        component={component}
        size={size as SizeOptions}
        onlyIcon={onlyIcon}
        sizeIcon={sizeIcon as IconSizes}
        type={type as TypeOptions}
        target={href && external ? '_blank' : undefined}
        rel={href && external ? 'noopener noreferrer' : undefined}
        iconLeft={iconLeft}
        buttonRef={ref}
        width={width}
        role={role}
      >
        {iconLeft && (
          <IconContainer
            size={size as SizeOptions}
            type={type as TypeOptions}
            onlyIcon={onlyIcon}
            sizeIcon={sizeIcon as IconSizes}
          >
            {iconLeft}
          </IconContainer>
        )}
        {children}
        {iconRight && (
          <IconContainer
            size={size as SizeOptions}
            type={type as TypeOptions}
            onlyIcon={onlyIcon}
            sizeIcon={sizeIcon as IconSizes}
            right
          >
            {iconRight}
          </IconContainer>
        )}
      </StyledButtonLink>
    );
  },
);

ButtonLink.displayName = 'ButtonLink';
