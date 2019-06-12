import { $Keys } from '../ts';

export class ObjectUtilities {
  public static omit<T extends object, K extends [...(keyof T)[]]>(obj: T, ...keys: K) {
    const ret = {} as { [K in $Keys<typeof obj>]: (typeof obj)[K] };
    const objKeys = ObjectUtilities.getKeys<typeof obj>(obj);

    objKeys.forEach(key => {
      if (!keys.includes(key)) {
        ret[key] = obj[key];
      }
    });

    return ret;
  }

  public static getKeys<T extends object>(obj: T) {
    return Object.keys(obj) as (keyof T)[];
  }
}
