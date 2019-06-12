import React, { useState } from 'react';

import styled, { Theme } from '../../styles';
import { ButtonLink } from '../Button/ButtonLink';
import { CardSection, StyledCardSection } from './CardSection';
import { CardHeader, StyledCardHeader } from './CardHeader';
import { StyledCardSectionContent } from './CardSection/CardSectionContent';
import { Icon } from '../Icon';
import { Loading, StyledLoading } from '../Loading';
import { SpacingsType } from '../../styles/theme/utils/spaceAfter';

interface Props {
  closable?: boolean;
  spaceAfter?: SpacingsType;
  onClose?: (ev: React.SyntheticEvent<HTMLButtonElement>) => void | Promise<any>;
}

interface StyledProps extends Props {
  expanded?: boolean;
  initialExpanded?: boolean;
  roundedTopBorders?: boolean;
  roundedBottomBorders?: boolean;
  hasAdjustedHeader?: boolean;
}

const CloseIcon = () => <Icon icon="times" color="secondary" />;

const getBorder = ({ theme }: { theme: Theme }) =>
  `${theme.card.border.width} ${theme.card.border.style} ${theme.card.colors.border}`;

const getBorderRadius = ({ theme }: { theme: Theme }) => theme.base.borderRadius;

// Logic of borders radius
const StyledChildWrapper = styled.div<StyledProps>`
  margin: ${({ theme, expanded }) => expanded && `${theme.base.spacing.xs} 0`};
  transition: margin ${({ theme, initialExpanded }) =>
    !initialExpanded && theme.base.transition.duration.fast} ease-in-out;

  ${StyledCardSection},
  ${StyledCardHeader},
  > ${StyledLoading} {
    border-top-left-radius: ${({ roundedTopBorders }) => roundedTopBorders && getBorderRadius};
    border-top-right-radius: ${({ roundedTopBorders }) => roundedTopBorders && getBorderRadius};
    border-bottom-left-radius: ${({ roundedBottomBorders }) =>
      roundedBottomBorders && getBorderRadius};
    border-bottom-right-radius: ${({ roundedBottomBorders }) =>
      roundedBottomBorders && getBorderRadius};
    box-shadow: ${({ expanded }) => expanded && `0 4px 12px 0 rgba(23, 27, 30, 0.1)`};
    border-left: ${getBorder};
    border-right: ${getBorder};
    border-bottom: ${getBorder};
    background: ${({ theme }) => theme.card.background};
  }

  + div ${StyledCardSection},
  ${StyledCardSection} {
    border-top: ${({ expanded }) => expanded && getBorder};
  }
`;

const StyledCard = styled.div<StyledProps>`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  font-family: ${({ theme }) => theme.base.font.family};
  margin-bottom: ${({ theme, spaceAfter }) => spaceAfter && theme.utils.spaceAfter(spaceAfter)};

  ${StyledCardHeader} {
    padding-right: ${({ theme, closable }) => closable && theme.base.spacing.lg};
    border-bottom: ${({ hasAdjustedHeader }) => hasAdjustedHeader && 0};
  }

  ${StyledChildWrapper} {
    &:first-of-type {
      ${StyledCardHeader},
      ${StyledCardSection},
      > ${StyledLoading} {
        border-top: ${getBorder};
        border-top-left-radius: ${getBorderRadius};
        border-top-right-radius: ${getBorderRadius};
      }

      + ${StyledChildWrapper} ${StyledCardSection} {
        padding-top: ${({ hasAdjustedHeader }) => hasAdjustedHeader && 0};

        ${StyledCardSectionContent}:first-of-type { // if there isn't any CardSectionHeader we need to delete padding of CardSectionContent
          padding-top: ${({ hasAdjustedHeader }) => hasAdjustedHeader && 0};
        }
      }
    }

    &:last-of-type {
      ${StyledCardHeader}, ${StyledCardSection} {
        border-bottom-left-radius: ${getBorderRadius};
        border-bottom-right-radius: ${getBorderRadius};
      }
    }
  }
`;

const CloseContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

export const Card: React.FC<Props> = ({ children, closable, spaceAfter, onClose }) => {
  const [initialExpandedSections, setInitialExpandedSections] = useState<number[]>([]);
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const isExpanded = (index: number) => expandedSections.indexOf(index) !== -1;
  const isInitialExpanded = (index: number) => initialExpandedSections.indexOf(index) !== -1;
  const isExpandableCardSection = (item: any) =>
    item.type.name === CardSection.name && item.props.expandable;

  const setInitialExpandedSection = (index: number) => {
    setInitialExpandedSections([...initialExpandedSections, index]);
  };

  const getChildren = () => {
    // Loading Card Logic
    const childArray = React.Children.toArray(children) as React.ComponentElement<any, any>[];
    if (childArray[0] === undefined) {
      // Jest test
      return [];
    }
    if (
      Loading.name !== '' &&
      childArray[0].type &&
      childArray[0].props &&
      childArray[0].type.name === Loading.name &&
      !childArray[0].props.loading
    ) {
      if (
        !Array.isArray(childArray[0].props.children) &&
        String(childArray[0].props.children.type) === React.Fragment.toString()
      ) {
        return childArray[0].props.children.props.children;
      }
    }
    return childArray;
  };

  const getRoundedBorders = (index: number) => {
    const topBorder =
      expandedSections.indexOf(index - 1) !== -1 || expandedSections.indexOf(index) !== -1;
    const bottomBorder =
      expandedSections.indexOf(index + 1) !== -1 || expandedSections.indexOf(index) !== -1;

    return {
      top: topBorder,
      bottom: bottomBorder,
    };
  };

  const handleToggleSection = (index: number) => {
    const newExpanded =
      expandedSections.indexOf(index) === -1
        ? [...expandedSections, index]
        : expandedSections.filter(v => v !== index);
    const newInitialExpanded = initialExpandedSections.filter(v => v !== index);

    setExpandedSections(newExpanded);
    setInitialExpandedSections(newInitialExpanded);
  };

  const hasAdjustedHeader = () => {
    const headerChildren = getChildren();

    if (headerChildren === undefined) {
      return false;
    }

    // Check if first element is Header
    if (
      headerChildren &&
      headerChildren[0] !== undefined &&
      headerChildren[0].type.name !== CardHeader.name
    ) {
      return false;
    }

    // Check if first section exists
    if (headerChildren && headerChildren[1] === undefined) {
      return false;
    }

    return !isExpandableCardSection(headerChildren[1]);
  };

  const renderSection = (section: any, index: number) => {
    const expanded = isExpanded(index);
    const initialExpanded = isInitialExpanded(index);

    const roundedBorders = getRoundedBorders(index);

    return (
      <StyledChildWrapper
        roundedTopBorders={roundedBorders.top}
        roundedBottomBorders={roundedBorders.bottom}
        expanded={expanded}
        initialExpanded={initialExpanded}
      >
        {React.cloneElement(section, {
          expanded,
          handleToggleSection: () => handleToggleSection(index),
          setInitialExpandedSection: () => setInitialExpandedSection(index),
        })}
      </StyledChildWrapper>
    );
  };

  return (
    <StyledCard closable={closable} spaceAfter={spaceAfter} hasAdjustedHeader={hasAdjustedHeader()}>
      {children && React.Children.map(children, (item, index) => renderSection(item, index))}
      {closable && (
        <CloseContainer>
          <ButtonLink
            type="secondary"
            size="small"
            icon={<CloseIcon />}
            onClick={onClose}
            transparent
          />
        </CloseContainer>
      )}
    </StyledCard>
  );
};

export { CardHeader } from './CardHeader';
export { CardSection } from './CardSection';
export { CardSectionHeader } from './CardSection/CardSectionHeader';
export { CardSectionContent } from './CardSection/CardSectionContent';
