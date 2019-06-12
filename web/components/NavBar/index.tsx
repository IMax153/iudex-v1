import React from 'react';

import styled, { css } from '../../styles';
import { Stack } from '../Stack';
import { Text } from '../Text';

interface Props {
  title?: string;
  inverted?: boolean;
  logo?: React.ReactNode;
  linkGroupLeft?: React.ReactNode;
  linkGroupRight?: React.ReactNode;
}

const Container = styled.div<Props>`
  width: 100%;
  display: flex;
  position: relative;
  height: ${({ theme }) => theme.navbar.height};
  background-color: ${({ theme, inverted }) =>
    inverted ? theme.base.palette.ink.dark : theme.base.palette.white.normal};
  color: ${({ theme, inverted }) =>
    inverted ? theme.base.palette.white.normal : theme.base.palette.ink.normal};
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  padding: 0 10px;
  font-size: ${({ theme }) => theme.text.fontSize.sm};
  font-weight: ${({ theme }) => theme.base.font.weight.medium};
  box-sizing: border-box;
  z-index: ${({ theme }) => theme.navbar.zIndex};

  ${({ theme }) =>
    theme.utils.media.tablet(css`
      position: fixed;
      top: 0;
      left: 0;
    `)};
`;

export { NavLink } from './NavLink';

export const NavBar: React.FC<Props> = ({
  title,
  inverted = false,
  logo,
  linkGroupLeft,
  linkGroupRight,
}) => (
  <Container inverted={inverted}>
    <Stack justify="between" align="center">
      <Stack flex shrink inline align="center">
        {logo}

        {title && (
          <Text size="large" type={inverted ? 'white' : 'info'}>
            {title}
          </Text>
        )}

        {linkGroupLeft}
      </Stack>
      <Stack inline align="center" justify="end" spacing="tight" tablet={{ spacing: 'natural' }}>
        {linkGroupRight}
      </Stack>
    </Stack>
  </Container>
);
