import React, { useState } from 'react';

import styled, { css } from '../../styles';

interface Props {
  tabs: string[];
  defaultSelected?: string;
  onClick?: (tab: string) => void;
}

interface InternalProps {
  active: boolean;
}

type TabProps = Pick<InternalProps, 'active'>;

const getTabBorders = ({ active }: { active: boolean }) => {
  return active
    ? css`
        border: 1px solid ${({ theme }) => theme.base.palette.cloud.normal};
        border-right: none;
        margin: 0 -1px 0 0;
        border-radius: ${({ theme }) => theme.base.borderRadius};
      `
    : css`
        border: none;
        margin: 0;
        border-radius: ${({ theme }) => theme.base.borderRadius};
      `;
};

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  height: 100%;
  margin: 0 10px;
  white-space: nowrap;
  text-overflow: ellipsis;

  border: none;
  border-right: 1px solid ${({ theme }) => theme.base.palette.cloud.normal};
`;

const Tab = styled.a<TabProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  appearance: none;
  text-decoration: none;
  flex: 0 0 auto;
  height: ${({ theme }) => theme.button.height.normal};
  background: none #fff;
  color: ${({ theme }) => theme.button.text.colors.secondary} !important;
  padding: ${({ theme }) => theme.button.padding.normal};
  font-family: ${({ theme }) => theme.base.font.family};
  font-weight: ${({ theme }) => theme.base.font.weight.bold}!important;
  font-size: ${({ theme }) => theme.button.fontSize.normal};
  cursor: pointer;
  transition: all 0.15s ease-in-out !important;
  outline: 0;

  ${getTabBorders}
`;

export const Tabs: React.FC<Props> = ({ tabs, defaultSelected, onClick = () => {} }) => {
  const [selected, setSelected] = useState(defaultSelected || tabs[0]);

  return (
    <TabsContainer>
      {tabs.map(tab => (
        <Tab
          key={`Tab:${tab}`}
          active={tab === selected}
          onClick={() => {
            setSelected(tab);
            onClick(tab);
          }}
        >
          {tab}
        </Tab>
      ))}
    </TabsContainer>
  );
};
