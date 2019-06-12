import { isDefined } from './isDefined';

export const getGrow = (grow?: boolean) => isDefined(grow) && (grow ? '1' : '0');
