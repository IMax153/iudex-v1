import React, { useState, useRef, useEffect, useCallback } from 'react';
import cuid from 'cuid';

import styled, { css, withTheme, Theme } from '../../styles';
import { getBreakpointWidth } from '../../styles/theme/utils/media';
import { KEY_CODES } from '../../lib/browser';
import { ButtonLink, StyledButtonLink } from '../Button';
import { StyledHeading } from '../Heading';
import { Icon } from '../Icon';
import { SIZES, Sizes, Tokens, TOKENS, FOCUSABLE_ELEMENT_SELECTORS } from './constants';
import { ModalProvider } from './ModalContext';
import { StyledModalFooter } from './ModalFooter';
import { MobileHeader, StyledModalHeader } from './ModalHeader';
import { StyledModalSection } from './ModalSection';

type onClose = (
  ev:
    | React.KeyboardEvent<HTMLDivElement>
    | React.SyntheticEvent<HTMLButtonElement>
    | React.MouseEvent<Element, MouseEvent>,
) => void | Promise<any>;

interface Props {
  size?: Sizes;
  onClose?: onClose;
  fixedFooter?: boolean;
  isMobileFullPage?: boolean;
}

interface InternalProps {
  size: Sizes;
  isMobileFullPage: boolean;
  loaded: boolean;
  scrolled: boolean;
  fullyScrolled: boolean;
  fixedClose: boolean;
  hasModalSection: boolean;
  modalWidth: number;
  footerHeight: number;
}

type ModalContainerProps = Pick<InternalProps, 'loaded' | 'isMobileFullPage' | 'size'>;
type CloseContainerProps = Pick<
  InternalProps,
  'loaded' | 'scrolled' | 'fixedClose' | 'modalWidth' | 'isMobileFullPage' | 'size'
>;
type ModalContentContainerProps = Pick<Props, 'isMobileFullPage' | 'fixedFooter' | 'size'> &
  InternalProps;

const getToken = (name: Tokens) => ({ theme }: { theme: Theme }) => {
  const tokens = {
    [TOKENS.background]: theme.modal.background,
    [TOKENS.borderRadius]: theme.modal.borderRadius,
  };
  return tokens[name];
};

const getSizeToken = () => ({ theme, size }: { theme: Theme; size: Sizes }) => {
  const tokens = {
    [SIZES.small]: theme.modal.width.sm,
    [SIZES.normal]: theme.modal.width.md,
    [SIZES.large]: theme.modal.width.lg,
  };
  return tokens[size];
};

// media query only for IE 10+, not Edge
const onlyIE = (style: any, breakpoint = 'all') =>
  css`
    @media ${breakpoint} and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      ${style};
    }
  `;

const ModalBody = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.modal.zIndex.overlay};
  box-sizing: border-box;
  outline: none;
  overflow-x: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: ${({ theme }) => theme.base.font.family};
  -webkit-overflow-scrolling: auto;

  ${({ theme }) =>
    theme.utils.media.largeMobile(css`
      overflow-y: auto;
      padding: ${theme.base.spacing.xxl};
    `)};

  ${onlyIE(css`
    position: -ms-page;
  `)};
`;

const ModalContainer = styled.div<ModalContainerProps>`
  box-sizing: border-box;
  min-height: 100%;
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  position: fixed;
  width: 100%;
  border-top-left-radius: ${({ isMobileFullPage }) =>
    !isMobileFullPage && getToken('borderRadius')};
  border-top-right-radius: ${({ isMobileFullPage }) =>
    !isMobileFullPage && getToken('borderRadius')};
  transition: ${({ theme }) => theme.utils.transition(['top'], 'normal', 'ease-in-out')};
  top: ${({ loaded, isMobileFullPage }) => (loaded ? !isMobileFullPage && '32px' : '100%')};

  ${onlyIE(css`
    /* IE flex bug, the content won't be centered if there is not 'height' property
    https://github.com/philipwalton/flexbugs/issues/231 */
    height: 1px;
  `)};

  ${({ theme }) =>
    theme.utils.media.largeMobile(css<ModalContainerProps>`
      position: relative;
      top: 0;
      max-width: ${getSizeToken};
      align-items: center;
    `)};
`;

const CloseContainer = styled.div<CloseContainerProps>`
  display: flex;
  position: ${({ scrolled, fixedClose }) => (fixedClose || scrolled ? 'fixed' : 'absolute')};
  top: ${({ scrolled, fixedClose, isMobileFullPage }) =>
    !isMobileFullPage && (fixedClose || scrolled) ? '32px' : '0'};
  right: 0;
  z-index: 800;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  height: 52px;
  width: 100%;
  max-width: ${({ modalWidth }) =>
    modalWidth
      ? `${modalWidth}px`
      : css<CloseContainerProps>`
          ${getSizeToken}
        `};
  box-shadow: ${({ scrolled }) => scrolled && `0 2px 4px 0 rgba(23, 27, 30, 0.1)`};
  background-color: ${({ scrolled }) => scrolled && getToken('background')};
  border-top-left-radius: ${({ isMobileFullPage }) =>
    !isMobileFullPage && getToken('borderRadius')};
  border-top-right-radius: ${({ isMobileFullPage }) =>
    !isMobileFullPage && getToken('borderRadius')};
  transition: ${({ theme }) =>
    theme.utils.transition(['box-shadow', 'background-color'], 'fast', 'ease-in-out')};

  ${({ scrolled, fixedClose, theme }) =>
    fixedClose || scrolled
      ? css`
          position: fixed;
          ${onlyIE(
            css`
              position: -ms-page;
            `,
            `(max-width:${Number(getBreakpointWidth('largeMobile', theme, true)) - 1}px)`,
          )};
        `
      : css`
          position: absolute;
        `};

  ${({ theme, scrolled, fixedClose }) =>
    theme.utils.media.largeMobile(css`
      top: ${(fixedClose || scrolled) && '0'};
      right: ${(fixedClose || scrolled) && 'auto'};
    `)};

  & + ${StyledModalSection}:first-of-type {
    padding-top: 52px;
    border-top: 0;
    margin: 0;
  }

  ${StyledButtonLink} {
    margin-right: ${({ theme }) => theme.base.spacing.xxs};

    & svg {
      transition: ${({ theme }) => theme.utils.transition(['color'], 'fast', 'ease-in-out')};
      color: ${({ theme }) => theme.base.palette.ink.light};
    }

    &:hover svg {
      color: ${({ theme }) => theme.base.palette.ink.lightHover};
    }

    &:active svg {
      color: ${({ theme }) => theme.base.palette.ink.lightActive};
    }
  }
`;

const ModalContentContainer = styled.div<ModalContentContainerProps>`
  position: absolute;
  box-sizing: border-box;
  border-top-left-radius: ${({ isMobileFullPage }) =>
    !isMobileFullPage && getToken('borderRadius')};
  border-top-right-radius: ${({ isMobileFullPage }) =>
    !isMobileFullPage && getToken('borderRadius')};
  background: ${getToken('background')};
  font-family: ${({ theme }) => theme.base.font.family};
  width: 100%;

  ${({ theme, fixedFooter, footerHeight, isMobileFullPage }) =>
    isMobileFullPage
      ? css`
          max-height: 100%;
          top: 0;
        `
      : css`
          max-height: calc(
            100% - ${theme.base.spacing.xl} -
              ${`${fixedFooter && Boolean(footerHeight) ? footerHeight : 0}px`}
          );
        `};

  bottom: ${({ fixedFooter, footerHeight, isMobileFullPage, theme }) =>
    css`
      ${(!isMobileFullPage ? parseInt(theme.base.spacing.xl, 10) : 0) +
        (fixedFooter && !!footerHeight ? footerHeight : 0)}px
    `};
  box-shadow: ${({ theme }) => theme.modal.boxShadow};
  overflow-y: auto;
  overflow-x: hidden;

  ${({ fixedFooter, theme, footerHeight, fullyScrolled }) =>
    fixedFooter &&
    footerHeight &&
    css`
      ${StyledModalFooter} {
        bottom: 0;
        padding: ${theme.base.spacing.md};
        box-shadow: ${fullyScrolled
          ? `inset 0 1px 0 ${theme.base.palette.cloud.normal}, 0 -2px 4px 0 rgba(23, 27, 30, 0)`
          : `inset 0 0 0 transparent, 0 -2px 4px 0 rgba(23, 27, 30, 0.1)`};
        position: fixed;
        transition: ${({ theme }) => theme.utils.transition(['box-shadow'], 'fast', 'ease-in-out')};
      }
      ${StyledModalSection}:last-of-type {
        padding-bottom: ${theme.base.spacing.lg};
        margin-bottom: 0;
      }
    `};

  ${MobileHeader} {
    top: ${({ scrolled, theme, isMobileFullPage }) =>
      !isMobileFullPage && scrolled && theme.base.spacing.lg};
    opacity: ${({ scrolled }) => scrolled && '1'};
    visibility: ${({ scrolled }) => scrolled && 'visible'};
    transition: ${({ scrolled, theme }) =>
      scrolled &&
      css`top ${theme.base.transition.duration.normal} ease-in-out,
    opacity ${theme.base.transition.duration.fast} ease-in-out,
    visibility ${theme.base.transition.duration.fast} ease-in-out ${
        theme.base.transition.duration.fast
      }`};
  }

  ${({ scrolled }) =>
    scrolled &&
    onlyIE(css`
      ${MobileHeader} {
        position: -ms-page;
      }
    `)};

  ${StyledModalHeader} {
    margin-bottom: ${({ hasModalSection, theme }) => !hasModalSection && theme.base.spacing.xl};
  }

  ${({
    theme,
    isMobileFullPage,
    scrolled,
    fullyScrolled,
    fixedFooter,
    footerHeight,
    hasModalSection,
    modalWidth,
  }) =>
    theme.utils.media.largeMobile(css`
      position: relative;
      bottom: auto;
      border-radius: ${!isMobileFullPage && '9px'};
      padding-bottom: 0;
      height: auto;
      overflow: visible;
      max-height: 100%;

      ${StyledModalSection}:last-of-type {
        padding-bottom: ${theme.base.spacing.xxl};
        margin-bottom: ${fixedFooter ? `${footerHeight}px` : '0'};

        &::after {
          content: none;
        }
      }

      ${StyledModalHeader} {
        margin-bottom: ${!hasModalSection && fixedFooter ? `${footerHeight}px` : '0'};
      }

      ${StyledModalFooter} {
        padding: ${fixedFooter
          ? `${theme.base.spacing.xl} ${theme.base.spacing.xxl}!important`
          : theme.base.spacing.xxl};
        max-width: ${modalWidth
          ? `${modalWidth}px`
          : css<ModalContentContainerProps>`
              ${getSizeToken}
            `};
        position: ${fixedFooter && fullyScrolled && 'absolute'};
        box-shadow: ${fullyScrolled && 'none'};
      }

      ${MobileHeader} {
        top: ${scrolled ? '0' : `-${theme.base.spacing.xxl}`};
        width: ${`calc(${modalWidth}px - 48px - ${theme.base.spacing.xxl})`};
      }
    `)};

  ${({ fixedFooter }) =>
    onlyIE(
      css`
        ${StyledModalFooter} {
          position: ${fixedFooter && '-ms-page'};
        }
      `,
    )};

  ${({ theme, fullyScrolled, fixedFooter, hasModalSection }) =>
    onlyIE(
      css`
        ${StyledModalFooter} {
          position: ${(fullyScrolled && fixedFooter && 'static') || (fixedFooter && 'fixed')};
          box-shadow: ${!fixedFooter && `inset 0 0 0 1px ${theme.base.palette.white}`};
        }

        ${fullyScrolled &&
          fixedFooter &&
          css`
            ${StyledModalSection}:last-of-type {
              margin-bottom: 0;
            }
            ${StyledModalHeader} {
              margin-bottom: ${!hasModalSection && '0'};
            }
          `};
      `,
      getBreakpointWidth('largeMobile', theme).toString(),
    )};
`;

export const PureModal: React.FC<Props & { theme: Theme }> = ({
  children,
  size = 'normal',
  isMobileFullPage = false,
  fixedFooter,
  // theme,
  onClose,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [fullyScrolled, setFullyScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [fixedClose, setFixedClose] = useState(false);
  const [hasModalSection, setModalSectionExists] = useState(false);
  const [modalWidth, setModalWidth] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  const modalContentRef = useRef<HTMLDivElement>(null);
  const modalBodyRef = useRef<HTMLDivElement>(null);
  const firstFocusableElRef = useRef<HTMLDivElement | null>(null);
  const lastFocusableElRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLAnchorElement>(null);
  const modalIDRef = useRef<string | null>(null);
  const offsetRef = useRef<number>(40);
  const focusTriggeredRef = useRef<boolean | null>(false);

  // const setScrollPosition = (value: number) => {
  //   if (window.innerWidth >= getBreakpointWidth('largeMobile', theme, true)) {
  //     if (modalBodyRef && modalBodyRef.current && modalBodyRef.current.scrollTop) {
  //       modalBodyRef.current.scrollTop = value;
  //     }
  //   } else if (modalContentRef && modalContentRef.current && modalContentRef.current.scrollTop) {
  //     modalContentRef.current.scrollTop = value;
  //   }
  // };

  const setDimensions = useCallback(() => {
    const content = modalContentRef && modalContentRef.current;

    if (content) {
      // added in 4.0.3, interpolation of styled component return static className
      const footerEl = content.querySelector<HTMLDivElement>(`${StyledModalFooter}`);
      const headingEl = content.querySelector<HTMLDivElement>(`${StyledHeading}`);

      if (headingEl) {
        offsetRef.current = headingEl.clientHeight + headingEl.offsetTop;
      }

      if (footerEl) {
        const footerHeight = footerEl.clientHeight;
        setFooterHeight(footerHeight);
      }

      const contentDimensions = content.getBoundingClientRect();
      const modalWidth = contentDimensions.width;
      setModalWidth(modalWidth);
    }
  }, []);

  const setHasModalSection = () => {
    if (!hasModalSection) setModalSectionExists(true);
  };

  const setFirstFocus = () => {
    if (modalBodyRef && modalBodyRef.current) modalBodyRef.current.focus();
  };

  const removeHasModalSection = () => {
    if (hasModalSection) setModalSectionExists(false);
  };

  const decideFixedFooter = useCallback(() => {
    // if the content height is smaller than window height, we need to explicitly set fullyScrolled to true
    const content = modalContentRef && modalContentRef.current;
    const body = modalBodyRef && modalBodyRef.current;
    // when scrollHeight + topPadding - scrollingElementHeight is smaller or even than window height
    if (content && body) {
      const fullyScrolled = content.scrollHeight + 40 - body.scrollTop <= window.innerHeight;
      setFullyScrolled(fullyScrolled);
    }
  }, []);

  const handleResize = useCallback(() => {
    setDimensions();
    decideFixedFooter();
  }, [setDimensions, decideFixedFooter]);

  const resolveAndSetStates = useCallback(
    (target: HTMLElement, fullScrollOffset: number, fixCloseOffset: number) => {
      setScrolled(target.scrollTop >= offsetRef.current);
      setFixedClose(target.scrollTop >= fixCloseOffset);
      // set fullyScrolled state sooner than the exact end of the scroll (with fullScrollOffset value)
      setFullyScrolled(
        Boolean(
          fixedFooter &&
            target.scrollTop >= target.scrollHeight - target.clientHeight - fullScrollOffset,
        ),
      );
    },
    [fixedFooter],
  );

  const handleMobileScroll = useCallback(
    (ev: React.UIEvent<HTMLDivElement>) => {
      if (modalContentRef && modalContentRef.current) {
        if (ev.target instanceof HTMLDivElement && ev.target === modalContentRef.current) {
          resolveAndSetStates(ev.target, 10, 1);
        }
      }
    },
    [resolveAndSetStates],
  );

  const handleScroll = useCallback(
    (ev: React.UIEvent<HTMLDivElement>) => {
      if (modalBodyRef && modalBodyRef.current) {
        if (ev.target instanceof HTMLDivElement && ev.target === modalBodyRef.current) {
          resolveAndSetStates(ev.target, 40, 40);
        }
      }
    },
    [resolveAndSetStates],
  );

  const manageFocus = () => {
    if (focusTriggeredRef.current) {
      const focusableElements =
        modalContentRef &&
        modalContentRef.current &&
        modalContentRef.current.querySelectorAll<HTMLDivElement>(FOCUSABLE_ELEMENT_SELECTORS);

      if (Array.isArray(focusableElements) && focusableElements.length > 0) {
        [firstFocusableElRef.current] = focusableElements;
        lastFocusableElRef.current = focusableElements[focusableElements.length - 1];
      }
    }
  };

  const keyboardHandler = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.keyCode === KEY_CODES.TAB) {
        // Rotate Focus
        if (!focusTriggeredRef.current) {
          focusTriggeredRef.current = true;
          manageFocus();
        }

        if (
          e.shiftKey &&
          (document.activeElement === firstFocusableElRef.current ||
            (modalBodyRef &&
              modalBodyRef.current &&
              document.activeElement === modalBodyRef.current))
        ) {
          e.preventDefault();
          if (lastFocusableElRef.current) lastFocusableElRef.current.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusableElRef.current) {
          e.preventDefault();
          if (firstFocusableElRef.current) firstFocusableElRef.current.focus();
        }
      }
    },
    [firstFocusableElRef, lastFocusableElRef],
  );

  const handleKeyDown = useCallback(
    (ev: React.KeyboardEvent<HTMLDivElement>) => {
      if (onClose && ev.key === 'Escape') {
        ev.stopPropagation();
        onClose(ev);
      }
      keyboardHandler(ev);
    },
    [keyboardHandler, onClose],
  );

  const handleClickOutside = useCallback(
    (ev: React.MouseEvent) => {
      if (
        onClose &&
        modalContentRef &&
        modalContentRef.current &&
        ev.target instanceof Node &&
        !modalContentRef.current.contains(ev.target)
      ) {
        // If is clicked outside of modal
        onClose(ev);
      }
    },
    [onClose],
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
      decideFixedFooter();
      setDimensions();
      setFirstFocus();
    }, 15);
    if (modalIDRef.current) modalIDRef.current = cuid();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [handleResize, setDimensions, decideFixedFooter]);

  return (
    <ModalBody
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onScroll={handleScroll}
      onClick={handleClickOutside}
      ref={modalBodyRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={modalIDRef.current || undefined}
    >
      <ModalContainer
        id={modalIDRef.current || undefined}
        size={size}
        loaded={loaded}
        onScroll={handleMobileScroll}
        isMobileFullPage={isMobileFullPage}
      >
        <ModalContentContainer
          size={size}
          loaded={loaded}
          fixedFooter={fixedFooter}
          scrolled={scrolled}
          ref={modalContentRef}
          fixedClose={fixedClose}
          fullyScrolled={fullyScrolled}
          modalWidth={modalWidth}
          footerHeight={footerHeight}
          hasModalSection={hasModalSection}
          isMobileFullPage={isMobileFullPage}
        >
          <CloseContainer
            size={size}
            loaded={loaded}
            modalWidth={modalWidth}
            scrolled={scrolled}
            fixedClose={fixedClose}
            isMobileFullPage={isMobileFullPage}
          >
            {onClose && (
              <ButtonLink
                onClick={onClose}
                size="normal"
                icon={<Icon icon="times" size="medium" color="tertiary" />}
                transparent
                onlyIcon
                ref={closeButtonRef}
              />
            )}
          </CloseContainer>
          <ModalProvider
            value={{
              setDimensions,
              decideFixedFooter,
              setHasModalSection,
              removeHasModalSection,
              manageFocus,
              hasModalSection,
              isMobileFullPage,
            }}
          >
            {children}
          </ModalProvider>
        </ModalContentContainer>
      </ModalContainer>
    </ModalBody>
  );
};

export const Modal = withTheme(PureModal);
Modal.displayName = 'Modal';
