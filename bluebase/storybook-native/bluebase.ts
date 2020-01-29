import { BootOptions, merge } from '@bluebase/core';

import commonBootOptions from '../common/bluebase';

const bootOptions: Partial<BootOptions> = {};

export default merge(commonBootOptions, bootOptions);
