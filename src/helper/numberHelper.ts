import { isObject } from 'lodash';
import numbro from 'numbro';

/**
 * Example:
 * - formatNumber(2509500) -> "2,509,500"
 * - formatNumber(1262350.21345) -> "1,262,350.21345"
 */
 export function formatNumber(value: number | string, option: numbro.Format = {}) {
  if (!isObject(option)) {
    return undefined;
  }

  return numbro(value).format({
    mantissa: 0,
    thousandSeparated: true,
    average: false,
    ...option,
  });
}