import { partial } from 'lodash-es';

import { Applicator, ApplicateOptions } from './Applicator';

export class PartialedApplicator extends Applicator {
  apply({ config: { execute }, value, args }: ApplicateOptions): any {
    return partial(execute as (...args: any[]) => any, value, ...args);
  }
}
