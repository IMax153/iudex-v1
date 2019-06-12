import React from 'react';

import styled, { Theme } from '../../styles';
import { SpacingsType } from '../../styles/theme/utils/spaceAfter';
import { ButtonLink } from '../Button';
import { Icon } from '../Icon';
import { ListItem } from '../List';
import { StyledText, StyledTextLink } from '../Text';
import { TYPE_OPTIONS, TypeOptions, TOKENS, Tokens } from './constants';

interface Props {
  type?: TypeOptions;
  title?: string;
  icon?: React.ReactNode;
  closable?: boolean;
  spaceAfter?: SpacingsType;
  onClose?: () => void | Promise<any>;
}

interface InternalProps {
  icon: React.ReactNode;
  type: TypeOptions;
  spaceAfter: SpacingsType;
  closable: boolean;
  hasChildren: boolean;
  title: string;
}

type AlertIconProps = Pick<InternalProps, 'type'>;
type StyledAlertProps = Pick<InternalProps, 'type' | 'icon' | 'closable' | 'spaceAfter'>;
type TitleProps = Pick<InternalProps, 'hasChildren'>;
type IconContainerProps = Pick<InternalProps, 'type'>;
type ContentContainerProps = Pick<InternalProps, 'title'>;
type ContentProps = Pick<InternalProps, 'type' | 'title'>;
type CloseContainerProps = Pick<InternalProps, 'hasChildren'>;

const getTypeToken = (name: Tokens) => ({ theme, type }: { theme: Theme; type: TypeOptions }) => {
  const tokens = {
    [TOKENS.colorIconAlert]: {
      [TYPE_OPTIONS.info]: theme.alert.icon.colors.info,
      [TYPE_OPTIONS.success]: theme.alert.icon.colors.success,
      [TYPE_OPTIONS.warning]: theme.alert.icon.colors.warning,
      [TYPE_OPTIONS.critical]: theme.alert.icon.colors.critical,
      [TYPE_OPTIONS.brand]: theme.alert.icon.colors.brand,
    },
    [TOKENS.backgroundAlert]: {
      [TYPE_OPTIONS.info]: theme.alert.background.info,
      [TYPE_OPTIONS.success]: theme.alert.background.success,
      [TYPE_OPTIONS.warning]: theme.alert.background.warning,
      [TYPE_OPTIONS.critical]: theme.alert.background.critical,
      [TYPE_OPTIONS.brand]: theme.alert.background.brand,
    },
    [TOKENS.colorTextAlert]: {
      [TYPE_OPTIONS.info]: theme.alert.text.colors.info,
      [TYPE_OPTIONS.success]: theme.alert.text.colors.success,
      [TYPE_OPTIONS.warning]: theme.alert.text.colors.warning,
      [TYPE_OPTIONS.critical]: theme.alert.text.colors.critical,
      [TYPE_OPTIONS.brand]: theme.alert.text.colors.brand,
    },
    [TOKENS.colorTextLinkAlertHover]: {
      [TYPE_OPTIONS.info]: theme.alert.textLinkHover.colors.info,
      [TYPE_OPTIONS.success]: theme.alert.textLinkHover.colors.success,
      [TYPE_OPTIONS.warning]: theme.alert.textLinkHover.colors.warning,
      [TYPE_OPTIONS.critical]: theme.alert.textLinkHover.colors.critical,
      [TYPE_OPTIONS.brand]: theme.alert.textLinkHover.colors.brand,
    },
  };
  return tokens[name][type];
};

const AlertIcon: React.FC<AlertIconProps> = ({ type }) => {
  switch (type) {
    default:
    case 'info':
      return <Icon icon="info-circle" color="info" size="large" />;
    case 'success':
      return <Icon icon="check-circle" color="success" size="large" />;
    case 'warning':
      return <Icon icon="bell" color="warning" size="large" />;
    case 'critical':
      return <Icon icon="exclamation-circle" color="critical" size="large" />;
  }
};

const StyledAlert = styled.div<StyledAlertProps>`
  position: relative;
  display: flex;
  width: 100%;
  padding: ${({ theme, icon, closable }) =>
    closable
      ? (icon &&
          `${theme.alert.padding.default} ${theme.base.spacing.xxl} ${
            theme.alert.padding.default
          } ${theme.alert.padding.default}`) ||
        `${theme.alert.padding.default} ${theme.base.spacing.xxl} ${theme.alert.padding.default} ${
          theme.alert.padding.default
        }`
      : (icon &&
          `${theme.alert.padding.default} ${theme.alert.padding.default} ${
            theme.alert.padding.default
          } ${theme.alert.padding.default}`) ||
        `${theme.alert.padding.default}`};
  border-radius: ${({ theme }) => theme.base.borderRadius};
  background: ${getTypeToken('backgroundAlert')};
  color: ${getTypeToken('colorTextAlert')};
  font-family: ${({ theme }) => theme.base.font.family};
  font-size: ${({ theme }) => theme.text.fontSize.md};
  box-sizing: border-box;
  margin-bottom: ${({ theme, spaceAfter }) => theme.utils.spaceAfter(spaceAfter)};
`;

const IconContainer = styled.div<IconContainerProps>`
  flex-shrink: 0;
  margin: 0 ${({ theme }) => theme.base.spacing.sm} 0 0;
  color: ${getTypeToken('colorIconAlert')};
`;

const ContentContainer = styled.div<ContentContainerProps>`
  flex: 1; // IE wrapping fix
  display: flex;
  flex-direction: ${({ title }) => title && 'column'};
  align-items: ${({ title }) => !title && 'center'};
`;

const Title = styled.div<TitleProps>`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme, hasChildren }) => hasChildren && theme.base.spacing.xs};
  font-weight: ${({ theme }) => theme.base.font.weight.bold};
  line-height: ${({ theme }) => theme.heading.lineHeight};
  min-height: ${({ theme }) => theme.icon.height.medium};
`;

const Content = styled.div<ContentProps>`
  display: block;
  margin-bottom: ${({ theme, title }) => title && theme.base.spacing.xxs};
  line-height: ${({ theme }) => theme.text.lineHeight};

  & a,
  & ${StyledTextLink} {
    color: ${getTypeToken('colorTextAlert')};
    font-weight: ${({ theme }) => theme.base.font.weight.medium};
    transition: color ${({ theme }) => theme.base.transition.duration.fast} ease-in-out;

    &:hover,
    &:focus,
    &:active {
      color: ${getTypeToken('colorTextLinkAlertHover')};
    }
  }

  & ${ListItem}, ${StyledText} {
    color: ${getTypeToken('colorTextAlert')};
  }
`;

const CloseContainer = styled.div<CloseContainerProps>`
  position: absolute;
  top: ${({ hasChildren }) => (hasChildren ? 0 : '50%')};
  margin-top: ${({ hasChildren, theme }) => !hasChildren && `-${theme.icon.width.small}`};
  right: 0;
  margin-right: ${({ hasChildren, theme }) => !hasChildren && theme.base.spacing.xs};
`;

export const Alert: React.FC<Props> = ({
  type = TYPE_OPTIONS.info as TypeOptions,
  title = '',
  closable = false,
  icon,
  onClose = () => {},
  children,
  spaceAfter = 'normal',
}) => {
  return (
    <StyledAlert type={type} icon={icon} closable={closable} spaceAfter={spaceAfter}>
      <IconContainer type={type}>
        {icon ? icon || <AlertIcon type={type} /> : undefined}
      </IconContainer>
      <ContentContainer title={title}>
        {title && <Title hasChildren={Boolean(children)}>{title}</Title>}
        {children && (
          <Content title={title} type={type}>
            {children}
          </Content>
        )}
      </ContentContainer>
      {closable && (
        <CloseContainer hasChildren={Boolean(children)}>
          <ButtonLink
            onClick={onClose}
            size="small"
            icon={<Icon icon="times" size="small" color={type} />}
            transparent
          />
        </CloseContainer>
      )}
    </StyledAlert>
  );
};
