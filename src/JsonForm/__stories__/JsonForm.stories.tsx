import { JsonFormProps } from '..';
import React from 'react';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('JsonForm', module)

	.add('With default props', () => (
		<JsonForm
			schema={{
				fields: [{
					label: 'Username',
					name: 'username',
					placeholder: 'Username',
					type: 'text',
				} as any, {
					name: 'password',
					placeholder: 'Password',
					type: 'password',
				}, {
					name: 'submit',
					type: 'submit',
					value: 'Go',
				}],
				initialValues: {
					password: '',
					username: '',
				},
				onSubmit: (values) => {
					// tslint:disable-next-line: no-console
					console.log('Login form submitted by following values', values);
				}
			}}
		/>
	));