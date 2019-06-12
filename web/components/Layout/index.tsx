import React from 'react';

import styled, { css } from '../../styles';
import { Grid } from '../Grid';
import { LayoutOptions, LAYOUT_SETTINGS } from './constants';

interface Props {
  type: LayoutOptions;
}

const getChildrenProps = (type: LayoutOptions, key: string) => {
  if (LAYOUT_SETTINGS[type].layoutColumns && LAYOUT_SETTINGS[type].layoutColumns[key]) {
    return LAYOUT_SETTINGS[type].layoutColumns[key];
  }
  return null;
};

const StyledLayout = styled(Grid)`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  padding: 0 ${({ theme }) => theme.base.spacing.md};
  padding-top: 60px;

  ${({ theme }) =>
    theme.utils.media.desktop(css`
      padding: ${({ theme }) => theme.base.spacing.lg};
      padding-top: 60px;
    `)};
`;

export { LayoutColumn } from './LayoutColumn';
export const Layout: React.FC<Props> = ({ children, type }) => {
  return (
    <StyledLayout {...LAYOUT_SETTINGS[type]}>
      {React.Children.map(children, (item, key) =>
        React.cloneElement(item as any, {
          ...getChildrenProps(type, key.toString()),
        }),
      )}
    </StyledLayout>
  );
};
