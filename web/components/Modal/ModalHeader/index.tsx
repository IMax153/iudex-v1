import React, { useEffect } from 'react';

import styled, { css, Theme } from '../../../styles';
import { Text } from '../../Text';
import { Heading, StyledHeading } from '../../Heading';
import { StyledModalSection } from '../ModalSection';
import { WithModalContext, Context } from '../ModalContext';
import { TOKENS, Tokens } from '../constants';

interface Props extends Context {
  children?: React.ReactNode;
  illustration?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  suppressed?: boolean;
}

type StyledModalHeaderProps = Pick<Props, 'illustration' | 'suppressed' | 'isMobileFullPage'>;
type StyledModalHeaderContentProps = Pick<Props, 'description'>;

const getToken = (name: Tokens) => ({ theme }: { theme: Theme }) => {
  const tokens = {
    [TOKENS.backgroundHeader]: theme.modal.header.colors.background.default,
    [TOKENS.backgroundHeaderSuppressed]: theme.modal.header.colors.background.suppressed,
    [TOKENS.borderRadiusHeader]: theme.modal.header.border.radius,
    [TOKENS.fontSizeHeader]: theme.modal.header.font.size,
    [TOKENS.paddingHeadingText]: theme.modal.header.text.padding,
    [TOKENS.paddingHeader]: theme.modal.header.padding.header,
    [TOKENS.paddingHeaderIllustrationSuppressed]:
      theme.modal.header.padding.headerIllustrationSuppressed,
    [TOKENS.paddingHeaderIllustrationNotSuppressed]:
      theme.modal.header.padding.headerIllustrationNotSuppressed,
    [TOKENS.paddingHeaderNoIllustrationSuppressed]:
      theme.modal.header.padding.headerNoIllustrationSuppressed,
    [TOKENS.marginTitle]: theme.modal.header.margin.title,
    [TOKENS.marginTitleWithIllustration]: theme.modal.header.margin.titleWithIllustration,
  };
  return tokens[name];
};

const ModalTitle = styled.div<Pick<Props, 'illustration'>>`
  margin-top: ${({ illustration }) =>
    illustration &&
    css`
      ${getToken('marginTitleWithIllustration')}
    `};

  ${StyledHeading} {
    padding-right: ${getToken('paddingHeadingText')};
  }

  ${({ theme }) =>
    theme.utils.media.desktop(css`
      ${StyledHeading} {
        padding: 0;
      }
    `)};
`;

const ModalDescription = styled.div`
  margin-top: ${getToken('marginTitle')};
`;

export const StyledModalHeader = styled.div<StyledModalHeaderProps>`
  width: 100%;
  display: block;
  padding: ${({ illustration, suppressed }) => css`
    ${(illustration && suppressed && getToken('paddingHeaderIllustrationSuppressed')) ||
      (illustration && !suppressed && getToken('paddingHeaderIllustrationNotSuppressed')) ||
      (!illustration && suppressed && getToken('paddingHeaderNoIllustrationSuppressed')) ||
      getToken('paddingHeader')}
  `};
  border-top-left-radius: ${({ isMobileFullPage }) =>
    !isMobileFullPage &&
    css`
      ${getToken('borderRadiusHeader')}
    `};
  border-top-right-radius: ${({ isMobileFullPage }) =>
    !isMobileFullPage &&
    css`
      ${getToken('borderRadiusHeader')}
    `};
  box-sizing: border-box;
  background-color: ${({ suppressed }) =>
    suppressed
      ? css`
          ${getToken('backgroundHeaderSuppressed')}
        `
      : css`
          ${getToken('backgroundHeader')}
        `};

  & ~ ${StyledModalSection}:first-of-type {
    border-top: ${({ suppressed, theme }) =>
      suppressed && `1px solid ${theme.base.palette.cloud.normal}`};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin-top: ${({ suppressed }) => suppressed && '0!important'};
  }

  ${({ theme, illustration, suppressed }) =>
    theme.utils.media.largeMobile(css`
      padding: ${illustration
        ? `${theme.base.spacing.xl} ${theme.base.spacing.xxl} ${
            suppressed ? theme.base.spacing.xxl : '0'
          } ${theme.base.spacing.xxl}`
        : `${theme.base.spacing.xxl} ${theme.base.spacing.xxl} ${
            suppressed ? theme.base.spacing.xxl : '0'
          } ${theme.base.spacing.xxl}`};

      & ~ ${StyledModalSection}:first-of-type {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `)};
`;

export const MobileHeader = styled.div<StyledModalHeaderProps>`
  display: inline-block;
  position: fixed;
  visibility: hidden;
  height: 52px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  top: ${({ isMobileFullPage }) => (isMobileFullPage ? '0' : '16px')};
  right: 48px;
  left: 0;
  font-family: ${({ theme }) => theme.base.font.family};
  font-weight: ${({ theme }) => theme.heading.fontWeight.display};
  font-size: ${getToken('fontSizeHeader')};
  color: ${({ theme }) => theme.heading.colors.default};
  line-height: 52px;
  box-sizing: border-box;
  padding: 0 0 0 ${({ theme }) => theme.base.spacing.lg};
  opacity: 0;
  transition: top ${({ theme }) => theme.base.transition.duration.fast} ease-in-out,
    opacity ${({ theme }) => theme.base.transition.duration.fast} ease-in-out,
    visibility ${({ theme }) => theme.base.transition.duration.fast} ease-in-out;
  z-index: 800;

  ${({ theme }) =>
    theme.utils.media.largeMobile(css`
      left: auto;
      right: auto;
      padding: 0;
    `)};
`;

const StyledModalHeaderContent = styled.div<StyledModalHeaderContentProps>`
  margin-top: ${({ description }) => (description ? '32px' : '16px')};
`;

const BaseModalHeader: React.FC<Props> = ({
  children,
  description,
  illustration,
  isMobileFullPage,
  suppressed,
  setDimensions,
  title,
  decideFixedFooter,
  manageFocus,
}) => {
  useEffect(() => {
    if (setDimensions) {
      setDimensions();
    }

    if (decideFixedFooter) {
      decideFixedFooter();
    }

    if (manageFocus) {
      manageFocus();
    }
  }, [setDimensions, decideFixedFooter, manageFocus]);

  const hasHeader = title || description;

  return (
    <StyledModalHeader
      illustration={Boolean(illustration)}
      suppressed={suppressed}
      isMobileFullPage={isMobileFullPage}
    >
      {illustration}
      {hasHeader && (
        <ModalTitle illustration={Boolean(illustration)}>
          {title && <Heading type="title1">{title}</Heading>}
          {description && (
            <ModalDescription>
              <Text size="large" element="div">
                {description}
              </Text>
            </ModalDescription>
          )}
        </ModalTitle>
      )}
      {children && (
        <StyledModalHeaderContent description={Boolean(description)}>
          {children}
        </StyledModalHeaderContent>
      )}
      {title && <MobileHeader isMobileFullPage={isMobileFullPage}>{title}</MobileHeader>}
    </StyledModalHeader>
  );
};

export const ModalHeader = WithModalContext(BaseModalHeader);
ModalHeader.displayName = 'ModalHeader';
