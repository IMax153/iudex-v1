import styled, { css } from '../../styles';

interface Props {
  hasScroll?: boolean;
}

export const List = styled.div<Props>`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  max-height: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-align: left;

  ${({ hasScroll }) =>
    hasScroll &&
    css`
      overflow: auto;
    `};
`;

export const ListItem = styled.li`
  padding: 14px 24px;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.base.palette.cloud.normal};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.base.palette.cloud.normalHover};
  }
`;

export { ListChoice } from './ListChoice';
