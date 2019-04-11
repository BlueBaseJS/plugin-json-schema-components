import { JsonLayoutProps } from '..';
import React from 'react';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const JsonLayout = getComponent<JsonLayoutProps>('JsonLayout');

storiesOf('JsonLayout', module)

	.add('With default props', () => (
		<JsonLayout
		filter ='sample.form'
			schema={{
				component: 'View',
				props: {
					style: {
						backgroundColor: 'green',
						padding : 20
					}
				},
				
				children: [
					{
						component : 'HomeScreen'
					},
					{
					component: 'Text',
					text : 'title',
					props: {
						style: {
							color: 'red'
						}
					},
					
				}],
				//text: 'This componenet is generated through JsonLayout Component',
			}}
		/>
	));