import { isDefined } from './isDefined';

export const getWrap = (wrap?: boolean) => isDefined(wrap) && (wrap ? 'wrap' : 'nowrap');
