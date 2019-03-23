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
					required: true,
					type: 'text',
				}, {
					label: 'Password',
					name: 'password',
					type: 'password',
				}, {
					direction: 'right',
					name: 'form-actions',
					type: 'actions',

					fields: [{
						name: 'reset',
						type: 'reset',
					}, {
						name: 'submit',
						// title: 'Login',
						type: 'submit',
					}]
				}],
				initialValues: {
					password: '',
					username: '',
				},
				onSubmit: (values, form) => {
					// tslint:disable-next-line: no-console
					console.log('Login form submitted by following values', values);

					setTimeout(() => {
						form.setSubmitting(false);
					}, 2000);
				},
			}}
		/>
	));