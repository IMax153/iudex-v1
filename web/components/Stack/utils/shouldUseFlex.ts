import { Props } from '../types';

export const shouldUseFlex = (props: Props) =>
  props.flex ||
  Object.keys(props)
    .map(
      item =>
        !(item === 'children' || item === 'spaceAfter' || item === 'spacing' || item === 'dataTest')
    )
    .indexOf(true) !== -1;
