import React from 'react';
import styled, { keyframes } from '../../styles';

import { TYPE_OPTIONS, TypeOptions, TOKENS, Tokens } from './constants';

interface Props {
  className?: string;
  text?: string;
  loading?: boolean;
  type?: TypeOptions;
}

const getToken = (name: Tokens) => ({ type }: { type: TypeOptions }) => {
  const tokens = {
    [TOKENS.align]: {
      [TYPE_OPTIONS.buttonLoader]: 'center',
      [TYPE_OPTIONS.searchLoader]: 'start',
      [TYPE_OPTIONS.boxLoader]: 'center',
      [TYPE_OPTIONS.pageLoader]: 'center',
      [TYPE_OPTIONS.inlineLoader]: 'center',
    },
    [TOKENS.height]: {
      [TYPE_OPTIONS.buttonLoader]: '100%',
      [TYPE_OPTIONS.searchLoader]: '40px',
      [TYPE_OPTIONS.boxLoader]: '80px',
      [TYPE_OPTIONS.pageLoader]: '120px',
      [TYPE_OPTIONS.inlineLoader]: 'auto',
    },
  };
  return tokens[name][type];
};

// Animations
const SpinnerAnimation = keyframes`
  100% { transform: rotate(360deg); }
`;

const LoaderAnimation = keyframes`
  0% {opacity: .3; transform:translateY(0px);}
  20% {opacity: 1; transform: translateY(-3px);}
  40%  {opacity: .3; transform:translateY(0px);}
  100%  {opacity: .3; transform:translateY(0px);}
`;

export const DummyDiv: React.FC<Props> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const StyledLoading = styled(DummyDiv)`
  position: ${({ type }) => type === TYPE_OPTIONS.buttonLoader && 'absolute'};
  top: ${({ type }) => type === TYPE_OPTIONS.buttonLoader && '0'};
  left: ${({ type }) => type === TYPE_OPTIONS.buttonLoader && '0'};
  width: ${({ type }) => type === TYPE_OPTIONS.buttonLoader && '100%'};
  height: ${getToken('height')};
  padding: ${({ theme, type }) => type !== TYPE_OPTIONS.inlineLoader && theme.loading.padding};
  display: ${({ type }) => (type === TYPE_OPTIONS.inlineLoader ? 'inline-flex' : 'flex')};
  flex-direction: ${({ type }) => (type === TYPE_OPTIONS.pageLoader ? 'column' : 'row')};
  justify-content: ${getToken('align')};
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
`;

const StyledLoadingText = styled.div<Props>`
  font-family: ${({ theme }) => theme.base.font.family};
  font-size: ${({ theme }) => theme.text.fontSize.md};
  color: ${({ theme }) => theme.loading.textColor};
  line-height: ${({ theme }) => theme.text.lineHeight};
  margin-top: ${({ theme, type }) => type === TYPE_OPTIONS.pageLoader && theme.base.spacing.md};
  margin-left: ${({ theme, type }) => type !== TYPE_OPTIONS.pageLoader && theme.base.spacing.sm};
`;

export const StyledSpinner = styled.svg<Props>`
  width: 40px;
  height: 40px;
  animation: ${SpinnerAnimation} 0.75s linear infinite;
`;

const StyledSpinnerCircle = styled.circle<Props>`
  fill: transparent;
  stroke: ${({ theme, type }) =>
    type === TYPE_OPTIONS.buttonLoader ? 'currentColor' : theme.base.palette.ink.lighter};
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-dasharray: 128px;
  stroke-dashoffset: 64px;
`;

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoaderCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  background: ${({ theme }) => theme.base.palette.ink.lighter};
  animation: ${LoaderAnimation} 1.25s infinite ease-in-out;

  &:nth-child(2) {
    animation-delay: 0.1s;
  }

  &:nth-child(3) {
    animation-delay: 0.2s;
    margin: 0;
  }
`;

export const Loading: React.FC<Props> = ({
  loading = false,
  type = TYPE_OPTIONS.pageLoader as TypeOptions,
  text,
  children,
}) => {
  return children && !loading ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <StyledLoading type={type}>
      {type === TYPE_OPTIONS.boxLoader ||
      type === TYPE_OPTIONS.searchLoader ||
      type === TYPE_OPTIONS.inlineLoader ? (
        <StyledLoader>
          <StyledLoaderCircle />
          <StyledLoaderCircle />
          <StyledLoaderCircle />
        </StyledLoader>
      ) : (
        <StyledSpinner viewBox="0 0 40 40">
          <StyledSpinnerCircle cx="50%" cy="50%" r="18" type={type} />
        </StyledSpinner>
      )}
      {type !== TYPE_OPTIONS.buttonLoader && (
        <StyledLoadingText type={type}>{text}</StyledLoadingText>
      )}
    </StyledLoading>
  );
};
