import once = require('lodash/once');

import { DecoratorConfig } from '../factory';
import { PreValueApplicator } from '../applicators';

export default new DecoratorConfig(once, new PreValueApplicator(), {
  optionalParams: true,
  setter: true
});
