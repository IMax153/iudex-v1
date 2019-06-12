import React, { PropsWithChildren } from 'react';

import styled, { Theme } from '../../styles';
import { TOKENS, Tokens } from './constants';
import { Icon } from '../Icon';
import { StyledText } from '../Text';

interface Props {
  info?: React.ReactNode;
  label?: React.ReactNode;
  value?: string;
  hasError?: boolean;
  disabled?: boolean;
  checked?: boolean;
  name?: string;
  tabIndex?: string;
  readOnly?: boolean;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void | Promise<any>;
}

interface InternalProps {
  className?: string;
  disabled: boolean;
  hasError: boolean;
  checked: boolean;
  htmlFor: string;
}

type BaseLabelProps = Pick<
  InternalProps,
  'className' | 'htmlFor' | 'disabled' | 'hasError' | 'checked'
>;
type InputProps = Pick<InternalProps, 'checked' | 'disabled' | 'hasError'>;

const getToken = (name: Tokens) => ({
  theme,
  hasError,
  disabled,
  checked,
}: {
  theme: Theme;
  hasError: boolean;
  disabled: boolean;
  checked: boolean;
}) => {
  const tokens = {
    [TOKENS.borderColor]:
      hasError && !disabled && !checked
        ? theme.checkbox.border.colors.error
        : theme.checkbox.border.colors.default,
    [TOKENS.iconColor]: disabled
      ? theme.checkbox.icon.colors.disabled
      : theme.checkbox.icon.colors.default,
  };
  return tokens[name];
};

const IconContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.inputField.background.default};
  height: ${({ theme }) => theme.checkbox.height};
  width: ${({ theme }) => theme.checkbox.width};
  border-radius: ${({ theme }) => theme.base.borderRadius};
  transform: scale(1);
  transition: all ${({ theme }) => theme.base.transition.duration.fast} ease-in-out;

  & > svg {
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 ${({ theme }) => theme.base.spacing.xs};
  flex: 1; // IE wrapping fix
`;

const Info = styled.span`
  font-size: ${({ theme }) => theme.formFeedback.fontSize};
  color: ${({ theme }) => theme.checkbox.info.colors.default};
  line-height: ${({ theme }) => theme.text.lineHeight};
`;

const LabelText = styled.span`
  font-family: ${({ theme }) => theme.base.font.family};
  font-weight: ${({ theme }) => theme.base.font.weight.normal};
  font-size: ${({ theme }) => theme.formLabel.fontSize};
  color: ${({ theme }) => theme.formLabel.colors.default};
  line-height: ${({ theme }) => theme.checkbox.height};

  ${StyledText} {
    font-weight: ${({ theme }) => theme.base.font.weight.normal};
    font-size: ${({ theme }) => theme.formLabel.fontSize};
    color: ${({ theme }) => theme.formLabel.colors.default};
    line-height: ${({ theme }) => theme.checkbox.height};
  }
`;

const Input = styled.input<InputProps>`
  opacity: 0;
  z-index: -1;
  position: absolute;

  &:checked ~ ${TextContainer} > ${LabelText} {
    font-weight: ${({ theme }) => theme.base.font.weight.medium};

    & > ${StyledText} {
      font-weight: ${({ theme }) => theme.base.font.weight.medium};
    }
  }

  &:checked + ${IconContainer} > svg {
    visibility: visible;
  }

  &:focus + ${IconContainer} {
    border: 2px solid ${({ theme }) => theme.checkbox.border.colors.focus};
  }

  &:active + ${IconContainer} {
    border-color: ${({ disabled, theme }) =>
      disabled ? getToken('borderColor') : theme.checkbox.border.colors.active};
    transform: ${({ disabled, theme }) =>
      !disabled && `scale(${theme.checkbox.modifiers.scale.active})`};
  }
`;

/* eslint-disable jsx-a11y/label-has-for */
const BaseLabel: React.FC<BaseLabelProps> = ({ className, htmlFor, children }) => (
  <label htmlFor={htmlFor} className={className}>
    {children}
  </label>
);

export const Label = styled(BaseLabel)`
  font-family: ${({ theme }) => theme.base.font.family};
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: self-start;
  opacity: ${({ disabled, theme }) => (disabled ? theme.checkbox.opacity.disabled : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  position: relative;
  ${IconContainer} {
    color: ${getToken('iconColor')};
    border: 1px solid ${getToken('borderColor')};
  }
  &:hover ${IconContainer} {
    border-color: ${({ disabled, theme }) => !disabled && theme.checkbox.border.colors.hover};
  }
`;

export const Checkbox = React.forwardRef<
  HTMLInputElement,
  PropsWithChildren<Props & Omit<React.HTMLAttributes<HTMLInputElement>, 'prefix'>>
>((props, ref) => {
  const {
    label,
    value,
    hasError = false,
    disabled = false,
    checked = false,
    name,
    onChange,
    info,
    readOnly,
    tabIndex,
  } = props;

  return (
    <Label htmlFor={name || ''} disabled={disabled} hasError={hasError} checked={checked}>
      <Input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        hasError={hasError}
        onChange={onChange}
        readOnly={readOnly}
        tabIndex={tabIndex}
        ref={ref}
      />
      <IconContainer>{checked && <Icon icon="check" size="small" color="brand" />}</IconContainer>
      {(label || info) && (
        <TextContainer>
          {label && <LabelText>{label}</LabelText>}
          {info && <Info>{info}</Info>}
        </TextContainer>
      )}
    </Label>
  );
});

Checkbox.displayName = 'Checkbox';
