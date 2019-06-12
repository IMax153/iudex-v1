import { isDefined } from './isDefined';

export const getShrink = (shrink?: boolean) => isDefined(shrink) && (shrink ? '1' : '0');
