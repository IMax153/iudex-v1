import { isDefined } from './isDefined';

export const getWidth = (inline?: boolean) => isDefined(inline) && (!inline && '100%');
