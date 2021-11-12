import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';

import { JsonLayoutProps } from '..';

const JsonLayout = getComponent<JsonLayoutProps>('JsonLayout');

storiesOf('JsonLayout', module)

	.add('With default props', () => (
		<JsonLayout
			schema={{
				component: 'Text',
				props: {
					style: {
						color: 'red'
					}
				},
				text: 'This componenet is generated through JsonLayout Component',
			}}
		/>
	));