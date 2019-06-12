import { Props } from '../index';

type GetDisplay = () => (props: Props) => string;

export const getDisplay: GetDisplay = () => ({ block }) => (block ? 'block' : 'inline-block');
