import React from 'react';

import styled from '../../../styles';
import { Heading, StyledHeading } from '../../Heading';
import { Checkbox, Label } from '../../Checkbox';
import { Text } from '../../Text';
import { getWidth, getHeight } from '../../Icon';

interface Props {
  icon: React.ReactNode;
  title: string;
  description?: string;
  selectable?: boolean;
  selected?: boolean;
  onClick?: (e: React.SyntheticEvent<HTMLDivElement>) => void | Promise<any>;
}

const StyledListChoiceIcon = styled.div`
  display: flex;
  flex: 0 0 auto;
  margin-right: ${({ theme }) => theme.base.spacing.sm};

  svg {
    width: ${getWidth('small')};
    height: ${getHeight('small')};
    color: ${({ theme }) => theme.icon.colors.primary};
    transition: color ${({ theme }) => theme.base.transition.duration.fast} ease-in-out;
  }
`;

const StyledListChoice = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: ${({ theme }) => `${theme.base.spacing.sm} ${theme.base.spacing.md}`};
  border-bottom: 1px solid ${({ theme }) => theme.base.palette.cloud.normal};
  background-color: ${({ theme }) => theme.base.palette.white.normal};
  transition: background-color 0.15s ease-in-out;
  cursor: pointer;

  &:last-child {
    border: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.base.palette.cloud.light};

    ${StyledListChoiceIcon} svg {
      color: ${({ theme }) => theme.icon.colors.attention};
    }
  }

  ${Label} {
    width: auto;
  }
`;

const StyledListChoiceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-right: ${({ theme }) => theme.base.spacing.sm};

  ${StyledHeading} {
    line-height: ${({ theme }) => theme.text.lineHeight};
  }
`;

export const ListChoice: React.FC<Props> = ({
  icon,
  title,
  description,
  selectable,
  onClick,
  selected,
}) => {
  return (
    <StyledListChoice onClick={onClick}>
      {icon && <StyledListChoiceIcon>{icon}</StyledListChoiceIcon>}
      <StyledListChoiceContent>
        <Heading type="title4" element="div">
          {title}
        </Heading>
        {description && (
          <Text type="secondary" size="small">
            {description}
          </Text>
        )}
      </StyledListChoiceContent>
      {selectable && <Checkbox checked={selected} readOnly />}
    </StyledListChoice>
  );
};
