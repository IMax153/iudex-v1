import { DevicesList } from '../../../styles/theme/utils/media/constants';
import { Props, Direction, Spacing, Viewport } from '../types';

export type GetProperty = (
  property: 'spacing' | 'direction',
  { index, devices }: { index: number; devices: DevicesList },
  object: Props
) => Direction | Spacing | undefined | null;

export const getProperty: GetProperty = (property, { index, devices }, props) => {
  const viewport = props && props[devices[index] as Viewport];
  if (viewport && viewport[property]) {
    return viewport[property];
  }
  if (index !== 0) {
    return getProperty(property, { index: index - 1, devices }, props);
  }
  return null;
};
