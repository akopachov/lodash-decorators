import { once } from 'lodash';

import { DecoratorConfig, DecoratorFactory } from './factory';
import { PreValueApplicator } from './applicators';

export const OnceAll = DecoratorFactory.createDecorator(new DecoratorConfig(once, PreValueApplicator))();