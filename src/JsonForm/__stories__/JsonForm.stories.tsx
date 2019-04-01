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
					label: 'Temp',
					max: 32,
					min: 16,
					name: 'temp',
					step: 1,
					type: 'range',
				}, {
					label: 'Language',
					name: 'lang',
					type: 'picker',

					items: [{
						label: 'JavaScript',
						value: 'js'
					}, {
						label: 'Java',
						value: 'java'
					}]
				}, {
					label: 'Gender',
					name: 'gender',
					type: 'radio-group',

					items: [{
						label: 'Male',
						value: 'male'
					}, {
						label: 'Female',
						value: 'female'
					}]
				}, {
					label: 'Remember Me',
					name: 'remember',
					type: 'checkbox',
				}, {
					label: 'Auto Login',
					name: 'auto-login',
					type: 'switch',
				}, {
					direction: 'right',
					name: 'form-actions',
					type: 'actions',

					fields: [{
						name: 'reset',
						type: 'reset',
					}, {
						name: 'submit',
						title: 'Login',
						type: 'submit',
					}]
				}],
				initialValues: {
					'auto-login': true,
					lang: 'js',
					password: '',
					remember: true,
					temp: 26,
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