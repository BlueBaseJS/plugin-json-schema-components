import { BlueBase, BootOptions } from '@bluebase/core';
import BlueBasePluginApollo from '@bluebase/plugin-apollo';
import { MaterialCommunityIcons } from '@bluebase/plugin-vector-icons';
import Plugin from '../../src';

// This file contain all the apps, plugins and configuration which are required
// for booting bluebase. see https://blueeast.gitbooks.io/bluebase/
export default {

	filters: {
		'bluebase.boot.end': (bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
			BB.Logger.log('BlueBase boot complete!', BB);
			return bootOptions;
		}
	},

	plugins: [
		MaterialCommunityIcons,
		BlueBasePluginApollo,
		Plugin,
	],
};
