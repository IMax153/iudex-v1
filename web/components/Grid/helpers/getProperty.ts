import { Queries } from '../../../styles/theme/utils/media/constants';
import { Props } from '../index';

interface ViewportInfo {
  index: number;
  devices: Queries[];
}

export type GetProperty = (
  property: 'rows' | 'columns' | 'gap' | 'rowGap' | 'columnGap',
  { index, devices }: ViewportInfo,
  props: Props,
) => string | undefined;

export const getProperty: GetProperty = (property, { index, devices }, props) => {
  const viewport = props && props[devices[index]];

  if (viewport && viewport[property]) {
    return viewport[property];
  }

  if (index !== 0) {
    return getProperty(property, { index: index - 1, devices }, props);
  }

  return undefined;
};
