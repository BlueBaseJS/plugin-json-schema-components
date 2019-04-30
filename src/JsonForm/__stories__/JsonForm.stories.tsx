import { JsonFormProps } from '..';
import React from 'react';
import { ScrollView } from 'react-native';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('JsonForm', module)

	.add('With default props', () => (
		<ScrollView>
			<JsonForm
				schema={{
					fields: [
						{
							name: 'form-actions',
							type: 'inline',

							fields: [{
								label: 'First Name',
								name: 'firstname',
								type: 'text',
							}, {
								label: 'Last Name',
								name: 'lastname',
								type: 'text',
							}]
						},
						{
							schema: { component: 'Divider' },
							type: 'component',
						},
						{
							label: 'Username',
							name: 'username',
							required: true,
							type: 'text',
						},
						{
							schema: { component: 'Divider' },
							type: 'component',
						},
						{
							label: 'Password',
							name: 'password',
							type: 'password',
						},
						{
							schema: { component: 'Divider' },
							type: 'component',
						},
						{
							label: 'Temp',
							max: 32,
							min: 16,
							name: 'temp',
							step: 1,
							type: 'range',
						},
						{
							schema: { component: 'Divider' },
							type: 'component',
						},
						{
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
						},
						{
							schema: { component: 'Divider' },
							type: 'component',
						},
						{
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
						},
						{
							schema: { component: 'Divider' },
							type: 'component',
						},
						{
							label: 'Remember Me',
							name: 'remember',
							type: 'checkbox',
						},
						{
							schema: { component: 'Divider' },
							type: 'component',
						},
						{
							label: 'Auto Login',
							name: 'auto-login',
							type: 'switch',
						},
						{
							schema: { component: 'Divider' },
							type: 'component',
						},
						{
							direction: 'right',
							name: 'form-actions',
							type: 'inline',

							fields: [{
								name: 'reset',
								type: 'reset',
							}, {
								name: 'submit',
								title: 'Login',
								type: 'submit',
							}]
						}
					],
					initialValues: {
						'auto-login': true,
						gender: 'female',
						lang: 'js',
						password: '',
						remember: true,
						temp: 26,
						username: '',
					},
					onSubmit: (values: any, form: any) => {
						// tslint:disable-next-line: no-console
						console.log('Login form submitted by following values', values);

						setTimeout(() => {
							form.setSubmitting(false);
						}, 2000);
					},
				}}
			/>
		</ScrollView>
	));