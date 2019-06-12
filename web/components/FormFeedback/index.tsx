import React from 'react';

import styled from '../../styles';
import { TYPE_OPTIONS, TypeOptions } from './constants';

interface Props {
  type: TypeOptions;
}

export const StyledFormFeedback = styled.div<Props>`
  color: ${({ theme, type }) =>
    type === TYPE_OPTIONS.error ? theme.text.colors.error : theme.text.colors.secondary};
  font-family: ${({ theme }) => theme.base.font.family};
  font-size: ${({ theme }) => theme.formFeedback.fontSize};
  font-weight: ${({ theme, type }) =>
    type === TYPE_OPTIONS.error ? theme.base.font.weight.medium : theme.base.font.weight.normal};
  line-height: ${({ theme }) => theme.text.lineHeight};
  width: 100%;
  position: absolute;
  top: 100%;
  max-height: ${({ theme }) =>
    Math.floor(parseInt(theme.text.lineHeight, 10) * parseInt(theme.formFeedback.fontSize, 10))}px;
  white-space: nowrap;
  text-overflow: ellipsis;

  & a {
    color: ${({ theme, type }) =>
      type === TYPE_OPTIONS.error ? theme.text.colors.error : theme.text.colors.attention};
    font-weight: ${({ theme }) => theme.base.font.weight.medium};
    text-decoration: underline;
    cursor: pointer;
  }

  strong,
  b {
    font-weight: ${({ theme }) => theme.base.font.weight.medium};
    color: ${({ theme }) => theme.base.palette.ink.normal};
  }
`;

export const FormFeedback: React.FC<Props> = ({
  type = TYPE_OPTIONS.help as TypeOptions,
  children,
}) => {
  return <StyledFormFeedback type={type}>{children}</StyledFormFeedback>;
};
