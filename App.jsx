import { BlueBaseApp } from '@bluebase/core';
import React from 'react';

import boot from './boot';
import { registerRootComponent } from 'expo';

let App;

// if (Constants.manifest.extra.storybookNative) {
// 	const StorybookApp = require('./storybook').default;
// 	App = StorybookApp;
// }
// else {
	const BBApp = () => <BlueBaseApp {...boot} />;
	BBApp.displayName = 'App';
	App = BBApp;
// }

registerRootComponent(App);
