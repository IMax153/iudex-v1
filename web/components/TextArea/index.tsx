import React, { PropsWithChildren } from 'react';

import styled, { Theme } from '../../styles';
import { SpacingsType } from '../../styles/theme/utils/spaceAfter';
import { FormLabel } from '../FormLabel';
import { FormFeedback } from '../FormFeedback';
import { SIZE_OPTIONS, SizeOptions, RESIZE_OPTIONS, ResizeOptions } from './constants';

interface Props {
  name?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  size?: SizeOptions;
  resize?: ResizeOptions;
  spaceAfter?: SpacingsType;
  fullHeight?: boolean;
  help?: React.ReactNode;
  error?: React.ReactNode;
  disabled?: boolean;
  maxLength?: number;
  tabIndex?: number;
  onChange?: (ev: React.ChangeEvent<HTMLTextAreaElement>) => void | Promise<any>;
  onFocus?: (ev: React.FocusEvent<HTMLTextAreaElement>) => void | Promise<any>;
  onBlur?: (ev: React.FocusEvent<HTMLTextAreaElement>) => void | Promise<any>;
}

interface InternalProps {
  size: SizeOptions;
  resize: ResizeOptions;
  spaceAfter: SpacingsType;
  error: React.ReactNode;
  disabled: boolean;
  fullHeight: boolean;
}

type FieldProps = Pick<InternalProps, 'fullHeight' | 'spaceAfter'>;
type StyledTextAreaProps = Pick<
  InternalProps,
  'disabled' | 'error' | 'fullHeight' | 'size' | 'resize'
>;

const getFontSize = () => ({ theme, size }: { theme: Theme; size: SizeOptions }) => {
  const tokens = {
    [SIZE_OPTIONS.small]: theme.inputField.fontSize.small,
    [SIZE_OPTIONS.normal]: theme.inputField.fontSize.normal,
  };
  return tokens[size];
};

const getPadding = () => ({ theme, size }: { theme: Theme; size: SizeOptions }) => {
  const tokens = {
    [SIZE_OPTIONS.small]: theme.textArea.padding.small,
    [SIZE_OPTIONS.normal]: theme.textArea.padding.normal,
  };
  return tokens[size];
};

const Field = styled.label<FieldProps>`
  font-family: ${({ theme }) => theme.base.font.family};
  display: flex;
  width: 100%;
  height: ${({ fullHeight }) => fullHeight && '100%'};
  flex-direction: column;
  position: relative;
  flex: ${({ fullHeight }) => fullHeight && '1'};
  margin-bottom: ${({ theme, spaceAfter }) => theme.utils.spaceAfter(spaceAfter)};
`;

const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  appearance: none;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: ${({ fullHeight }) => fullHeight && '100%'};
  padding: ${getPadding()};
  border-radius: ${({ theme }) => theme.base.borderRadius};
  box-shadow: inset 0 0 0
    ${({ theme, error }) =>
      `${theme.inputField.border.width.default} ${
        error ? theme.inputField.border.colors.error : theme.inputField.border.colors.default
      }`};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.inputField.background.disabled : theme.inputField.background.default};
  color: ${({ disabled, theme }) =>
    disabled ? theme.inputField.text.colors.disabled : theme.inputField.text.colors.default};
  font-size: ${getFontSize()};
  line-height: ${({ theme }) => theme.text.lineHeight};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  font-family: ${({ theme }) => theme.base.font.family};
  resize: ${({ resize }) => resize};
  transition: box-shadow ${({ theme }) => theme.base.transition.duration.fast} ease-in-out;
  flex: ${({ fullHeight }) => fullHeight && '1'};
  border: 1px solid transparent;
  overflow: auto;

  &::placeholder {
    color: ${({ theme }) => theme.inputField.placeholder.colors.default};
  }

  &:hover {
    box-shadow: ${({ disabled, theme, error }) =>
      !disabled &&
      `inset 0 0 0 ${theme.inputField.border.width.default} ${
        error ? theme.inputField.border.colors.errorHover : theme.inputField.border.colors.hover
      }`};
  }

  &:focus {
    box-shadow: ${({ theme, disabled }) =>
      !disabled && `inset 0 0 0 2px ${theme.inputField.border.colors.focus}`};
    outline: none;
  }
`;

export const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  PropsWithChildren<Props & React.TextareaHTMLAttributes<HTMLTextAreaElement>>
>(
  (
    {
      name,
      value,
      label,
      placeholder,
      size = SIZE_OPTIONS.normal as SizeOptions,
      resize = RESIZE_OPTIONS.vertical as ResizeOptions,
      spaceAfter = 'none',
      fullHeight = false,
      help,
      error,
      disabled = false,
      maxLength,
      tabIndex,
      onChange,
      onFocus,
      onBlur,
    },
    ref,
  ) => {
    return (
      <Field fullHeight={fullHeight} spaceAfter={spaceAfter}>
        {label && (
          <FormLabel filled={Boolean(value)} disabled={disabled}>
            {label}
          </FormLabel>
        )}
        <StyledTextArea
          name={name}
          value={value}
          size={size}
          fullHeight={fullHeight}
          disabled={disabled}
          error={error}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          resize={resize}
          tabIndex={tabIndex}
          ref={ref}
        />
        {help && !error && <FormFeedback type="help">{help}</FormFeedback>}
        {error && <FormFeedback type="error">{error}</FormFeedback>}
      </Field>
    );
  },
);
