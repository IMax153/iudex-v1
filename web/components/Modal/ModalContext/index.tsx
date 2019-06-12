import React, { createContext } from 'react';

export interface Context {
  setDimensions?: () => void;
  decideFixedFooter?: () => void;
  setHasModalSection?: () => void;
  removeHasModalSection?: () => void;
  manageFocus?: () => void;
  hasModalSection?: boolean;
  isMobileFullPage?: boolean;
}

export const ModalContext = createContext<Context>({
  setDimensions: () => {},
  decideFixedFooter: () => {},
  setHasModalSection: () => {},
  removeHasModalSection: () => {},
  manageFocus: () => {},
  hasModalSection: false,
  isMobileFullPage: false,
});

export const ModalConsumer = ModalContext.Consumer;
export const ModalProvider = ModalContext.Provider;

export function WithModalContext<P extends {}>(
  Component: React.ComponentType<P>
): React.ComponentType<P & Context> {
  return (props: P) => (
    <ModalContext.Consumer>
      {contextProps => <Component {...props} {...contextProps} />}
    </ModalContext.Consumer>
  );
}
