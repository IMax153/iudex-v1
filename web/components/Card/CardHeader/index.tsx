import React from 'react';
import styled, { css } from '../../../styles';

import { Heading, StyledHeading } from '../../Heading';
import { TypeOptions } from '../../Heading/constants';
import { Text } from '../../Text';

interface Props {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  actions?: React.ReactNode;
  headerSize?: TypeOptions;
}

export const StyledCardHeader = styled.div`
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.base.spacing.md};
  box-sizing: border-box;
  color: ${({ theme }) => theme.heading.colors.default};
  ${({ theme }) =>
    theme.utils.media.desktop(css`
      padding: ${theme.base.spacing.lg};
    `)}
`;

const StyledHeadingWrapper = styled.div`
  display: flex;
  align-items: center;

  ${StyledHeading} {
    width: 100%;
  }
`;

const StyledSubTitle = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.base.spacing.xxs};
`;

const StyledIcon = styled.div`
  color: ${({ theme }) => theme.heading.colors.default};
  display: flex;
  align-items: center;
  margin: 0 ${({ theme }) => theme.base.spacing.sm} 0 0;
`;

export const CardHeader: React.FC<Props> = ({
  icon,
  title,
  subTitle,
  actions,
  headerSize = 'title3',
}) => (
  <StyledCardHeader>
    <StyledHeadingWrapper>
      {icon && <StyledIcon>{icon}</StyledIcon>}
      <Heading type={headerSize} element="div">
        {title}
      </Heading>
      {actions}
    </StyledHeadingWrapper>
    {subTitle && (
      <StyledSubTitle>
        {typeof subTitle === 'string' ? <Text type="secondary">{subTitle}</Text> : subTitle}
      </StyledSubTitle>
    )}
  </StyledCardHeader>
);
