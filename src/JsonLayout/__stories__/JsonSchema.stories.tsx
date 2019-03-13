import { JsonLayoutProps } from '..';
import React from 'react';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const JsonLayout = getComponent<JsonLayoutProps>('JsonLayout');

storiesOf('JsonSchema', module)

	.add('With default props', () => (
		<JsonLayout
			schema={{
				component: 'Text',
				props: {
					style: {
						color: 'red'
					}
				},
				text: 'This componenet is generated through JsonSchema Component',
			}}
		/>
	));