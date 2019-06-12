import { css, Theme } from '../../../index';
import { QUERIES, Queries } from './constants';

type Media = { [key in Queries]: (style: any) => any };

export const getBreakpointWidth = (name: Queries, theme: Theme, pure: boolean = false) => {
  const tokens = {
    [QUERIES.mediumMobile]: theme.base.breakpoints.mediumMobile,
    [QUERIES.largeMobile]: theme.base.breakpoints.largeMobile,
    [QUERIES.tablet]: theme.base.breakpoints.tablet,
    [QUERIES.desktop]: theme.base.breakpoints.desktop,
    [QUERIES.largeDesktop]: theme.base.breakpoints.largeDesktop,
  };
  if (pure) {
    return tokens[name];
  }
  return `(min-width: ${tokens[name]}px)`;
};

export const media = Object.keys(QUERIES).reduce(
  (obj, name) => ({
    ...obj,
    [QUERIES[name as Queries]]: (style: any) =>
      css`
        @media ${({ theme }) => getBreakpointWidth(QUERIES[name as Queries] as Queries, theme)} {
          ${style};
        }
      `,
  }),
  {},
) as Media;

export { QUERIES };
