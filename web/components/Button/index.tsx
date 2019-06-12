import React, { RefObject, PropsWithChildren } from 'react';

import styled, { css, Theme } from '../../styles';
import { TYPE_OPTIONS, TypeOptions, SIZE_OPTIONS, SizeOptions, TOKENS, Tokens } from './constants';
import { getWidth, getHeight } from '../Icon';
import { ICON_SIZES, IconSizes } from '../Icon/constants';
import { Loading, StyledSpinner } from '../Loading';

interface Props {
  className?: string;
  component?: string | React.ReactNode;
  href?: string;
  external?: boolean;
  circled?: boolean;
  bordered?: boolean;
  disabled?: boolean;
  block?: boolean;
  loading?: boolean;
  type?: TypeOptions;
  size?: SizeOptions;
  sizeIcon?: IconSizes;
  width?: number;
  submit?: boolean;
  icon?: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  tabIndex?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  role?: string;
  title?: string | ((v: any) => string);
  spaceAfter?: 'none' | 'smallest' | 'small' | 'normal' | 'medium' | 'large' | 'largest';
}

const getSizeToken = (name: Tokens) => ({ theme, size }: { theme: Theme; size: SizeOptions }) => {
  const tokens = {
    [TOKENS.heightButton]: {
      [SIZE_OPTIONS.mini]: theme.button.height.mini,
      [SIZE_OPTIONS.small]: theme.button.height.small,
      [SIZE_OPTIONS.normal]: theme.button.height.normal,
      [SIZE_OPTIONS.large]: theme.button.height.large,
    },
    [TOKENS.loadingWidth]: {
      [SIZE_OPTIONS.mini]: theme.button.icon.mini,
      [SIZE_OPTIONS.small]: theme.button.icon.small,
      [SIZE_OPTIONS.normal]: theme.button.icon.normal,
      [SIZE_OPTIONS.large]: theme.button.icon.large,
    },
    [TOKENS.loadingHeight]: {
      [SIZE_OPTIONS.mini]: theme.button.icon.mini,
      [SIZE_OPTIONS.small]: theme.button.icon.small,
      [SIZE_OPTIONS.normal]: theme.button.icon.normal,
      [SIZE_OPTIONS.large]: theme.button.icon.large,
    },
    [TOKENS.fontSizeButton]: {
      [SIZE_OPTIONS.mini]: theme.button.fontSize.mini,
      [SIZE_OPTIONS.small]: theme.button.fontSize.small,
      [SIZE_OPTIONS.normal]: theme.button.fontSize.normal,
      [SIZE_OPTIONS.large]: theme.button.fontSize.large,
    },
  };
  return tokens[name][size];
};

const getTypeToken = (name: Tokens) => ({ theme, type }: { theme: Theme; type: TypeOptions }) => {
  const tokens = {
    [TOKENS.backgroundButton]: {
      [TYPE_OPTIONS.primary]: theme.button.background.primary,
      [TYPE_OPTIONS.secondary]: theme.button.background.secondary,
      [TYPE_OPTIONS.info]: theme.button.background.info,
      [TYPE_OPTIONS.success]: theme.button.background.success,
      [TYPE_OPTIONS.warning]: theme.button.background.warning,
      [TYPE_OPTIONS.critical]: theme.button.background.critical,
      [TYPE_OPTIONS.white]: theme.button.background.white,
    },
    [TOKENS.backgroundButtonHover]: {
      [TYPE_OPTIONS.primary]: theme.button.background.primaryHover,
      [TYPE_OPTIONS.secondary]: theme.button.background.secondaryHover,
      [TYPE_OPTIONS.info]: theme.button.background.infoHover,
      [TYPE_OPTIONS.success]: theme.button.background.successHover,
      [TYPE_OPTIONS.warning]: theme.button.background.warningHover,
      [TYPE_OPTIONS.critical]: theme.button.background.criticalHover,
      [TYPE_OPTIONS.white]: theme.button.background.whiteHover,
    },
    [TOKENS.backgroundButtonActive]: {
      [TYPE_OPTIONS.primary]: theme.button.background.primaryActive,
      [TYPE_OPTIONS.secondary]: theme.button.background.secondaryActive,
      [TYPE_OPTIONS.info]: theme.button.background.infoActive,
      [TYPE_OPTIONS.success]: theme.button.background.successActive,
      [TYPE_OPTIONS.warning]: theme.button.background.warningActive,
      [TYPE_OPTIONS.critical]: theme.button.background.criticalActive,
      [TYPE_OPTIONS.white]: theme.button.background.whiteActive,
    },
    [TOKENS.backgroundButtonBordered]: {
      [TYPE_OPTIONS.primary]: theme.button.background.bordered,
      [TYPE_OPTIONS.secondary]: theme.button.background.bordered,
      [TYPE_OPTIONS.info]: theme.button.background.bordered,
      [TYPE_OPTIONS.success]: theme.button.background.bordered,
      [TYPE_OPTIONS.warning]: theme.button.background.bordered,
      [TYPE_OPTIONS.critical]: theme.button.background.bordered,
      [TYPE_OPTIONS.white]: theme.button.background.whiteBordered,
    },
    [TOKENS.backgroundButtonBorderedHover]: {
      [TYPE_OPTIONS.primary]: theme.button.background.borderedHover,
      [TYPE_OPTIONS.secondary]: theme.button.background.borderedHover,
      [TYPE_OPTIONS.info]: theme.button.background.borderedHover,
      [TYPE_OPTIONS.success]: theme.button.background.borderedHover,
      [TYPE_OPTIONS.warning]: theme.button.background.borderedHover,
      [TYPE_OPTIONS.critical]: theme.button.background.borderedHover,
      [TYPE_OPTIONS.white]: theme.button.background.whiteBorderedHover,
    },
    [TOKENS.backgroundButtonBorderedActive]: {
      [TYPE_OPTIONS.primary]: theme.button.background.borderedActive,
      [TYPE_OPTIONS.secondary]: theme.button.background.borderedActive,
      [TYPE_OPTIONS.info]: theme.button.background.borderedActive,
      [TYPE_OPTIONS.success]: theme.button.background.borderedActive,
      [TYPE_OPTIONS.warning]: theme.button.background.borderedActive,
      [TYPE_OPTIONS.critical]: theme.button.background.borderedActive,
      [TYPE_OPTIONS.white]: theme.button.background.whiteBorderedActive,
    },
    [TOKENS.colorTextButton]: {
      [TYPE_OPTIONS.primary]: theme.button.text.colors.primary,
      [TYPE_OPTIONS.secondary]: theme.button.text.colors.secondary,
      [TYPE_OPTIONS.info]: theme.button.text.colors.info,
      [TYPE_OPTIONS.success]: theme.button.text.colors.success,
      [TYPE_OPTIONS.warning]: theme.button.text.colors.warning,
      [TYPE_OPTIONS.critical]: theme.button.text.colors.critical,
      [TYPE_OPTIONS.white]: theme.button.text.colors.white,
    },
    [TOKENS.colorTextButtonBordered]: {
      [TYPE_OPTIONS.primary]: theme.button.text.colors.primaryBordered,
      [TYPE_OPTIONS.secondary]: theme.button.text.colors.secondaryBordered,
      [TYPE_OPTIONS.info]: theme.button.text.colors.infoBordered,
      [TYPE_OPTIONS.success]: theme.button.text.colors.successBordered,
      [TYPE_OPTIONS.warning]: theme.button.text.colors.warningBordered,
      [TYPE_OPTIONS.critical]: theme.button.text.colors.criticalBordered,
      [TYPE_OPTIONS.white]: theme.button.text.colors.whiteBordered,
    },
    [TOKENS.colorTextButtonHover]: {
      [TYPE_OPTIONS.primary]: theme.button.text.colors.primaryHover,
      [TYPE_OPTIONS.secondary]: theme.button.text.colors.secondaryHover,
      [TYPE_OPTIONS.info]: theme.button.text.colors.infoHover,
      [TYPE_OPTIONS.success]: theme.button.text.colors.successHover,
      [TYPE_OPTIONS.warning]: theme.button.text.colors.warningHover,
      [TYPE_OPTIONS.critical]: theme.button.text.colors.criticalHover,
      [TYPE_OPTIONS.white]: theme.button.text.colors.whiteHover,
    },
    [TOKENS.colorTextButtonBorderedHover]: {
      [TYPE_OPTIONS.primary]: theme.button.text.colors.primaryBorderedHover,
      [TYPE_OPTIONS.secondary]: theme.button.text.colors.secondaryBorderedHover,
      [TYPE_OPTIONS.info]: theme.button.text.colors.infoBorderedHover,
      [TYPE_OPTIONS.success]: theme.button.text.colors.successBorderedHover,
      [TYPE_OPTIONS.warning]: theme.button.text.colors.warningBorderedHover,
      [TYPE_OPTIONS.critical]: theme.button.text.colors.criticalBorderedHover,
      [TYPE_OPTIONS.white]: theme.button.text.colors.whiteBorderedHover,
    },
    [TOKENS.colorTextButtonActive]: {
      [TYPE_OPTIONS.primary]: theme.button.text.colors.primaryActive,
      [TYPE_OPTIONS.secondary]: theme.button.text.colors.secondaryActive,
      [TYPE_OPTIONS.info]: theme.button.text.colors.infoActive,
      [TYPE_OPTIONS.success]: theme.button.text.colors.successActive,
      [TYPE_OPTIONS.warning]: theme.button.text.colors.warningActive,
      [TYPE_OPTIONS.critical]: theme.button.text.colors.criticalActive,
      [TYPE_OPTIONS.white]: theme.button.text.colors.whiteActive,
    },
    [TOKENS.colorTextButtonBorderedActive]: {
      [TYPE_OPTIONS.primary]: theme.button.text.colors.primaryBorderedActive,
      [TYPE_OPTIONS.secondary]: theme.button.text.colors.secondaryBorderedActive,
      [TYPE_OPTIONS.info]: theme.button.text.colors.infoBorderedActive,
      [TYPE_OPTIONS.success]: theme.button.text.colors.successBorderedActive,
      [TYPE_OPTIONS.warning]: theme.button.text.colors.warningBorderedActive,
      [TYPE_OPTIONS.critical]: theme.button.text.colors.criticalBorderedActive,
      [TYPE_OPTIONS.white]: theme.button.text.colors.whiteBorderedActive,
    },
    [TOKENS.borderColorButton]: {
      [TYPE_OPTIONS.primary]: theme.button.border.colors.primary,
      [TYPE_OPTIONS.secondary]: theme.button.border.colors.secondary,
      [TYPE_OPTIONS.info]: theme.button.border.colors.info,
      [TYPE_OPTIONS.success]: theme.button.border.colors.success,
      [TYPE_OPTIONS.warning]: theme.button.border.colors.warning,
      [TYPE_OPTIONS.critical]: theme.button.border.colors.critical,
      [TYPE_OPTIONS.white]: theme.button.border.colors.white,
    },
    [TOKENS.borderColorButtonHover]: {
      [TYPE_OPTIONS.primary]: theme.button.border.colors.primaryHover,
      [TYPE_OPTIONS.secondary]: theme.button.border.colors.secondaryHover,
      [TYPE_OPTIONS.info]: theme.button.border.colors.infoHover,
      [TYPE_OPTIONS.success]: theme.button.border.colors.successHover,
      [TYPE_OPTIONS.warning]: theme.button.border.colors.warningHover,
      [TYPE_OPTIONS.critical]: theme.button.border.colors.criticalHover,
      [TYPE_OPTIONS.white]: theme.button.border.colors.whiteHover,
    },
    [TOKENS.borderColorButtonActive]: {
      [TYPE_OPTIONS.primary]: theme.button.border.colors.primaryActive,
      [TYPE_OPTIONS.secondary]: theme.button.border.colors.secondaryActive,
      [TYPE_OPTIONS.info]: theme.button.border.colors.infoActive,
      [TYPE_OPTIONS.success]: theme.button.border.colors.successActive,
      [TYPE_OPTIONS.warning]: theme.button.border.colors.warningActive,
      [TYPE_OPTIONS.critical]: theme.button.border.colors.criticalActive,
      [TYPE_OPTIONS.white]: theme.button.border.colors.whiteActive,
    },
  };
  return tokens[name][type];
};

const buttonSpacing = () => ({
  theme,
  onlyIcon,
  iconRight,
  iconLeft,
  size,
}: {
  theme: Theme;
  onlyIcon: boolean;
  iconRight: React.ReactNode;
  iconLeft: React.ReactNode;
  size: SizeOptions;
}) => {
  if (onlyIcon) return theme.button.padding.withoutText;

  const tokens = {
    [TOKENS.paddingButton]: {
      [SIZE_OPTIONS.mini]: theme.button.padding.mini,
      [SIZE_OPTIONS.small]: theme.button.padding.small,
      [SIZE_OPTIONS.normal]: theme.button.padding.normal,
      [SIZE_OPTIONS.large]: theme.button.padding.large,
    },
    [TOKENS.paddingButtonWithIcons]: {
      [SIZE_OPTIONS.mini]: theme.button.padding.miniWithIcons,
      [SIZE_OPTIONS.small]: theme.button.padding.smallWithIcons,
      [SIZE_OPTIONS.normal]: theme.button.padding.normalWithIcons,
      [SIZE_OPTIONS.large]: theme.button.padding.largeWithIcons,
    },
    [TOKENS.paddingButtonWithLeftIcon]: {
      [SIZE_OPTIONS.mini]: theme.button.padding.miniWithLeftIcon,
      [SIZE_OPTIONS.small]: theme.button.padding.smallWithLeftIcon,
      [SIZE_OPTIONS.normal]: theme.button.padding.normalWithLeftIcon,
      [SIZE_OPTIONS.large]: theme.button.padding.largeWithLeftIcon,
    },
    [TOKENS.paddingButtonWithRightIcon]: {
      [SIZE_OPTIONS.mini]: theme.button.padding.miniWithRightIcon,
      [SIZE_OPTIONS.small]: theme.button.padding.smallWithRightIcon,
      [SIZE_OPTIONS.normal]: theme.button.padding.normalWithRightIcon,
      [SIZE_OPTIONS.large]: theme.button.padding.largeWithRightIcon,
    },
  };
  if (iconLeft && iconRight) {
    return tokens[TOKENS.paddingButtonWithIcons][size];
  }
  if (iconLeft && !iconRight) {
    return tokens[TOKENS.paddingButtonWithLeftIcon][size];
  }
  if (!iconLeft && iconRight) {
    return tokens[TOKENS.paddingButtonWithRightIcon][size];
  }
  return tokens[TOKENS.paddingButton][size];
};

const iconSpacing = () => ({
  theme,
  size,
  onlyIcon,
}: {
  theme: Theme;
  size: SizeOptions;
  onlyIcon: boolean;
}) => {
  const tokens = {
    [TOKENS.marginRightIcon]: {
      [SIZE_OPTIONS.mini]: theme.button.margin.icon.mini,
      [SIZE_OPTIONS.small]: theme.button.margin.icon.small,
      [SIZE_OPTIONS.normal]: theme.button.margin.icon.normal,
      [SIZE_OPTIONS.large]: theme.button.margin.icon.large,
    },
  };

  if (onlyIcon) {
    return null;
  }

  return `0 ${tokens[TOKENS.marginRightIcon][size]} 0 0`;
};

const DummyDiv: React.FC<
  Props & {
    onlyIcon: boolean;
    sizeIcon: IconSizes;
  }
> = ({ className, children }) => <div className={className}>{children}</div>;

const IconContainer = styled(DummyDiv)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: ${iconSpacing()};
  /*
    // @ts-ignore */
  color: ${({ bordered }) =>
    bordered ? getTypeToken('colorTextButtonBordered') : getTypeToken('colorTextButton')};
  transition: background ${({ theme }) => theme.base.transition.duration.fast} ease-in-out,
    box-shadow ${({ theme }) => theme.base.transition.duration.fast} ease-in-out;

  > * {
    width: ${({ sizeIcon }) => getWidth(sizeIcon)};
    height: ${({ sizeIcon }) => getHeight(sizeIcon)};
  }
`;

const ButtonComponent: React.FC<
  Props & {
    onlyIcon: boolean;
    theme: Theme;
    sizeIcon: IconSizes;
    style: any;
    buttonRef: RefObject<HTMLButtonElement>;
  }
> = ({
  theme,
  component,
  circled,
  external,
  type = TYPE_OPTIONS.primary,
  icon,
  iconLeft,
  iconRight,
  sizeIcon,
  width,
  bordered,
  loading,
  onlyIcon,
  block,
  size = SIZE_OPTIONS.normal,
  style,
  submit,
  buttonRef,
  ariaControls,
  ariaExpanded = false,
  spaceAfter,
  title,
  ...props
}) => {
  const isButtonWithHref = component === 'button' && props.href;
  const Component = (isButtonWithHref ? 'a' : component) as React.ElementType;
  const buttonType = submit ? 'submit' : 'button';

  return (
    <Component
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-label={title}
      type={!isButtonWithHref ? buttonType : undefined}
      size={size}
      {...props}
      ref={buttonRef}
    >
      {props.children}
    </Component>
  );
};

export const StyledButton = styled(ButtonComponent)`
  position: relative;
  display: ${({ href, component }) => (href || component === 'a' ? 'inline-flex' : 'flex')};
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  appearance: none;
  text-decoration: none;
  width: ${({ block, width, onlyIcon }) =>
    block
      ? '100%'
      : (width && `${width}px`) || (onlyIcon && getSizeToken('heightButton')) || 'auto'};
  flex: ${({ block }) => (block ? '1 1 100%' : '0 0 auto')};
  height: ${getSizeToken('heightButton')};
  /*
    // @ts-ignore */
  background: ${({ bordered }) =>
    bordered ? getTypeToken('backgroundButtonBordered') : getTypeToken('backgroundButton')};
  color: ${({ bordered }) =>
    bordered
      ? getTypeToken('colorTextButtonBordered')
      : getTypeToken('colorTextButton')} !important;
  border: 0;
  border-radius: ${({ theme, circled }) =>
    circled ? getSizeToken('heightButton') : theme.base.borderRadius};
  padding: ${buttonSpacing()};
  font-family: ${({ theme }) => theme.base.font.family};
  font-weight: ${({ theme }) => theme.base.font.weight.bold}!important;
  font-size: ${getSizeToken('fontSizeButton')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.15s ease-in-out !important;
  outline: 0;
  opacity: ${({ disabled, theme }) => disabled && theme.button.opacity.disabled};
  box-shadow: ${({ bordered, theme, type }) =>
    bordered &&
    type &&
    `inset 0 0 0 1px ${getTypeToken('borderColorButton')({
      theme,
      type,
    })}`}; /* Cannot resolve with 0 0 0 1px getTypeToken(TOKENS.borderColorButton) */
  margin-bottom: ${({ theme, spaceAfter }) => spaceAfter && theme.utils.spaceAfter(spaceAfter)};

  &:hover {
    background: ${({ disabled, bordered }) =>
      !disabled &&
      (bordered
        ? getTypeToken('backgroundButtonBorderedHover')
        : getTypeToken('backgroundButtonHover'))};
    box-shadow: ${({ disabled, bordered, theme, type }) =>
      !disabled &&
      bordered &&
      type &&
      `inset 0 0 0 1px ${getTypeToken('borderColorButtonHover')({ theme, type })}`};
    color: ${({ disabled, bordered }) =>
      !disabled &&
      (bordered
        ? getTypeToken('colorTextButtonBorderedHover')
        : getTypeToken('colorTextButtonHover'))}!important;

    ${IconContainer} {
      color: ${({ disabled, bordered }) =>
        !disabled &&
        (bordered
          ? getTypeToken('colorTextButtonBorderedHover')
          : getTypeToken('colorTextButtonHover'))};
    }
  }

  &:active {
    ${({ disabled, theme }) => !disabled && `transform: scale(${theme.button.scale.active})`};
    background: ${({ disabled, bordered }) =>
      !disabled &&
      (bordered
        ? getTypeToken('backgroundButtonBorderedActive')
        : getTypeToken('backgroundButtonActive'))};
    box-shadow: ${({ disabled, bordered, theme, type }) =>
      !disabled &&
      type &&
      (bordered && `inset 0 0 0 1px ${getTypeToken('borderColorButtonActive')({ theme, type })}`)};
    color: ${({ disabled, bordered }) =>
      !disabled &&
      (bordered
        ? getTypeToken('colorTextButtonBorderedActive')
        : getTypeToken('colorTextButtonActive'))}!important;

    & ${IconContainer} {
      color: ${({ disabled, bordered }) =>
        !disabled &&
        (bordered
          ? getTypeToken('colorTextButtonBorderedActive')
          : getTypeToken('colorTextButtonActive'))};
    }
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

  ${StyledSpinner} {
    width: ${getSizeToken('loadingWidth')};
    height: ${getSizeToken('loadingHeight')};
  }
`;

const StyledButtonContent = styled.div<Props>`
  visibility: ${({ loading }) => loading && 'hidden'};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<Props & React.HTMLAttributes<HTMLButtonElement>>
>((props, ref) => {
  const {
    component = 'button',
    children,
    bordered,
    disabled,
    href,
    size = SIZE_OPTIONS.normal as SizeOptions,
    sizeIcon = ICON_SIZES.medium as IconSizes,
    icon,
    iconRight,
    external,
    type = TYPE_OPTIONS.primary as TypeOptions,
    block,
    loading = false,
    width = 0,
    role,
    title,
  } = props;
  const iconLeft = props.iconLeft || icon;
  const onlyIcon = iconLeft && !children;
  const isDisabled = loading || disabled;

  return (
    <StyledButton
      {...props}
      iconLeft={iconLeft}
      bordered={bordered}
      block={block}
      component={component}
      disabled={isDisabled}
      loading={loading}
      onlyIcon={onlyIcon}
      size={size}
      sizeIcon={sizeIcon}
      target={href && external ? '_blank' : undefined}
      rel={href && external ? 'noopener noreferrer' : undefined}
      type={type}
      width={width}
      buttonRef={ref}
      role={role}
      title={title}
    >
      {loading && <Loading type="buttonLoader" />}
      <StyledButtonContent loading={loading}>
        {iconLeft && (
          <IconContainer
            bordered={bordered}
            onlyIcon={onlyIcon}
            size={size}
            sizeIcon={sizeIcon}
            type={type}
          >
            {iconLeft}
          </IconContainer>
        )}
        {children}
        {iconRight && (
          <IconContainer
            bordered={bordered}
            onlyIcon={onlyIcon}
            size={size}
            sizeIcon={sizeIcon}
            type={type}
            right
          >
            {iconRight}
          </IconContainer>
        )}
      </StyledButtonContent>
    </StyledButton>
  );
});

Button.displayName = 'Button';

export { ButtonLink, StyledButtonLink } from './ButtonLink';
