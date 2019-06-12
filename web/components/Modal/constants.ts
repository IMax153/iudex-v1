import { $Keys } from '../../lib/ts';

export const SIZES = {
  small: 'small',
  normal: 'normal',
  large: 'large',
};

export type Sizes = $Keys<typeof SIZES>;

export const TOKENS = {
  background: 'background',
  backgroundFooter: 'backgroundFooter',
  backgroundHeader: 'backgroundHeader',
  backgroundHeaderSuppressed: 'backgroundHeaderSuppressed',
  backgroundSection: 'backgroundSection',
  backgroundSectionSuppressed: 'backgroundSectionSuppressed',
  borderColorSection: 'borderSection',
  borderRadius: 'borderRadius',
  borderRadiusSection: 'borderRadiusSection',
  borderRadiusHeader: 'borderRadiusHeader',
  fontSizeHeader: 'fontSizeHeader',
  paddingFooter: 'paddingFooter',
  paddingFooterDesktop: 'paddingFooterDesktop',
  paddingHeadingText: 'paddingHeadingText',
  paddingHeader: 'paddingHeader',
  paddingHeaderIllustrationSuppressed: 'paddingHeaderIllustrationSuppressed',
  paddingHeaderIllustrationNotSuppressed: 'paddingHeaderIllustrationNotSuppressed',
  paddingHeaderNoIllustrationSuppressed: 'paddingHeaderNoIllustrationSuppressed',
  paddingSection: 'paddingSection',
  marginTitle: 'marginTitle',
  marginTitleWithIllustration: 'marginTitleWithIllustration',
  boxShadowActionableInverted: 'boxShadowActionableInverted',
};

export type Tokens = $Keys<typeof TOKENS>;

export const FOCUSABLE_ELEMENT_SELECTORS =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, [tabindex="0"], [contenteditable]';
