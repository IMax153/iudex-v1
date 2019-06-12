import { SpacingsType } from '../../styles/theme/utils/spaceAfter';

export type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type Align = 'start' | 'end' | 'center';

export type Justify = 'start' | 'end' | 'center' | 'between' | 'around';

export type Viewport =
  | 'smallMobile'
  | 'mediumMobile'
  | 'largeMobile'
  | 'tablet'
  | 'desktop'
  | 'largeDesktop';

export type Spacing =
  | 'none'
  | 'extraTight'
  | 'tight'
  | 'condensed'
  | 'compact'
  | 'natural'
  | 'comfy'
  | 'loose'
  | 'extraLoose';

export interface MediaQuery {
  align?: Align;
  direction?: Direction;
  justify?: Justify;
  spacing?: Spacing;
  basis?: string;
  inline?: boolean;
  wrap?: boolean;
  grow?: boolean;
  shrink?: boolean;
}

export interface Props {
  align?: Align;
  direction?: Direction;
  justify?: Justify;
  spacing?: Spacing;
  smallMobile?: MediaQuery;
  mediumMobile?: MediaQuery;
  largeMobile?: MediaQuery;
  tablet?: MediaQuery;
  desktop?: MediaQuery;
  largeDesktop?: MediaQuery;
  spaceAfter?: SpacingsType;
  basis?: string;
  className?: string;
  inline?: boolean;
  flex?: boolean;
  wrap?: boolean;
  grow?: boolean;
  shrink?: boolean;
}
