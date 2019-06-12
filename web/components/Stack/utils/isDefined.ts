import { MediaQuery } from '../types';

type Property = number | boolean | string | MediaQuery | { [key: string]: Property } | undefined;

export const isDefined = (prop: Property) => typeof prop !== 'undefined';
