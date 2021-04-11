import { accSub as minus } from './acc-math';
import {toNumber} from './../../helper/number';
import {ERROR_VALUE} from './../../error';

export const SYMBOL = '-';

export default function func(first, ...rest) {
  const result = rest.reduce((acc, value) => minus(acc, toNumber(value)), toNumber(first));

  if (isNaN(result)) {
    throw Error(ERROR_VALUE);
  }

  return result;
}

func.SYMBOL = SYMBOL;
