import { BootOptions } from '@bluebase/core';
import commonBootOptions from '../common/bluebase';
import deepmerge from 'deepmerge';
//import Plugins from  "../../src/index"
/**
 * Add your platform specific configs here. 
 * We keep all the universal (cross platform) configs in 
 * the common folder, and extend them here.
 */
const bootOptions: Partial<BootOptions> = {

	plugins: [
		//Plugins,
		require('@bluebase/plugin-material-ui')
	],

	filters : {
		'sample.form' : (schema) => {
			console.log ('schema',schema)
			schema.children.push ({
				component : 'HomeScreen'
			})
			return schema;
		}
	}
};

export default deepmerge(commonBootOptions, bootOptions);
