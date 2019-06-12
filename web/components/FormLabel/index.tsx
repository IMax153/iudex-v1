import React from 'react';

import styled from '../../styles';

interface Props {
  id?: string;
  className?: string;
  disabled?: boolean;
  filled?: boolean;
  required?: boolean;
}

const StyledAsterisk = styled.span<Props>`
  font-weight: ${({ theme }) => theme.base.font.weight.bold};
  color: ${({ theme, filled }) =>
    !filled ? theme.text.colors.error : theme.formLabel.colors.default};
  font-size: ${({ theme }) => theme.formLabel.fontSize};
  vertical-align: top;
`;

const FormLabelComponent: React.FC<Props> = ({ className, children, required, filled, id }) => (
  <span className={className} id={id}>
    {required && <StyledAsterisk filled={filled}>* </StyledAsterisk>}
    <span>{children}</span>
  </span>
);

export const FormLabel = styled(FormLabelComponent)`
  display: block;
  font-family: ${({ theme }) => theme.base.font.family};
  font-size: ${({ theme }) => theme.formLabel.fontSize};
  color: ${({ theme, filled, disabled }) =>
    !filled || disabled ? theme.formLabel.colors.default : theme.formLabel.colors.filled};
  line-height: ${({ theme }) => theme.text.lineHeight};
  margin-bottom: ${({ theme }) => theme.base.spacing.xxs};
`;
