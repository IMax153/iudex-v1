import { isDefined } from './isDefined';

export const getDisplay = (inline?: boolean) =>
  isDefined(inline) && (inline ? 'inline-flex' : 'flex');
