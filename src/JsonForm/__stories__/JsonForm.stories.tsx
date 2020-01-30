import {
	BlueBase,
	BlueBaseApp,
	BlueBaseConsumer,
	IntlMessages,
	getComponent,
} from '@bluebase/core';
import { ScrollView, Text, TextInput, View } from 'react-native';

import { FormTextInput } from '../Fields';
import { JsonFormProps } from '..';
import Plugin from '../../index';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { ui } from './plugins';

const JsonForm = getComponent<
	JsonFormProps<{
		'auto-login': boolean;
		gender: string;
		lang: string;
		password: string;
		remember: boolean;
		temp: number;
		username: string;
	}>
>('JsonForm');

const CustomField = () => <Text>Custom Field</Text>;

storiesOf('JsonForm', module)
	.add('With default props', () => (
		<ScrollView>
			<JsonForm
				schema={{
					// onChange: (formik: any) => console.log(formik.values),

					fields: [
						{
							name: 'form-actions',
							type: 'inline',

							fields: [
								{
									label: 'First Name',
									name: 'firstname',
									type: 'text',
								},
								{
									label: 'Last Name',
									name: 'lastname',
									type: 'text',
								},
							],
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

							items: [
								{
									label: 'JavaScript',
									value: 'js',
								},
								{
									label: 'Java',
									value: 'java',
								},
							],
						},
						{
							schema: { component: 'Divider' },
							type: 'component',
						},
						{
							label: 'Gender',
							name: 'gender',
							type: 'radio-group',

							items: [
								{
									label: 'Male',
									value: 'male',
								},
								{
									label: 'Female',
									value: 'female',
								},
							],
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

							fields: [
								{
									name: 'reset',
									type: 'reset',
								},
								{
									name: 'submit',
									title: 'Login',
									type: 'submit',
								},
							],
						},
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
	))

	.add('Custom Field', () => (
		<ScrollView>
			<JsonForm
				schema={{
					// onChange: (formik: any) => console.log(formik.values),

					fieldTypes: {
						custom: [CustomField],
					},

					fields: [
						{
							name: 'custom-field',
							type: 'custom',
						},
					],

					initialValues: {
						// 'custom-field': true,
					} as any,

					onSubmit: (values: any, form: any) => {
						// tslint:disable-next-line: no-console
						console.log('Form submitted by following values', values);
						form.setSubmitting(false);
					},
				}}
			/>
		</ScrollView>
	))

	.add('Simple TextInput', () => (
		<ScrollView>
			<JsonForm
				schema={{
					// onChange: (formik: any) => console.log(formik.values),

					fieldTypes: {
						text: [() => <FormTextInput MainComponent={TextInput} name="custom-field" />],
					},

					fields: [
						{
							name: 'custom-field',
							required: true,
							type: 'text',
						},
						{
							name: 'submit',
							type: 'submit',
						},
					],

					initialValues: {
						// 'custom-field': true,
					} as any,

					onSubmit: (values: any, form: any) => {
						// tslint:disable-next-line: no-console
						console.log('Form submitted by following values', values);
						form.setSubmitting(false);
					},
				}}
			/>
		</ScrollView>
	))

	.add('Array Field', () => (
		<ScrollView>
			<JsonForm
				schema={{
					fields: [
						{
							name: 'friends',
							type: 'array',

							fields: [
								{
									label: 'First Name',
									name: 'firstName',
									required: true,
									type: 'text',
								},
								{
									label: 'Last Name',
									name: 'lastName',
									type: 'text',
								},
							],
						},
						{
							name: 'submit',
							type: 'submit',
						},
					],

					initialValues: {
						friends: [
							{
								firstName: 'Abdul Rehman',
								lastName: 'Talat',
							},
							{
								firstName: 'John',
								lastName: 'Doe',
							},
						],
					} as any,

					onSubmit: (values: any, form: any) => {
						// tslint:disable-next-line: no-console
						console.log('Form submitted by following values', values);
						form.setSubmitting(false);
					},
				}}
			/>
		</ScrollView>
	))

	.add('Full Height Form', () => (
		<View style={{ height: 500 }}>
			<JsonForm
				schema={{
					// onChange: (formik: any) => console.log(formik.values),

					fields: [
						{
							label: 'Name',
							name: 'name',
							required: true,
							type: 'text',
						},
						{
							schema: {
								component: 'View',
								props: {
									style: {
										flex: 1,
									},
								},
							},
							type: 'component',
						},
						{
							fullWidth: true,
							name: 'submit',
							title: 'Connect',
							type: 'submit',
						},
					],

					initialValues: {} as any,

					onSubmit: (values: any, form: any) => {
						// tslint:disable-next-line: no-console
						console.log('Login form submitted by following values', values);

						setTimeout(() => {
							form.setSubmitting(false);
						}, 2000);
					},
				}}
			/>
		</View>
	))

	.add('Internationalization', () => {
		const props = {
			configs: {
				direction: 'rtl',
				locale: 'ur',
			},

			filters: {
				'bluebase.intl.messages.ur': (messages: IntlMessages) => ({
					...messages,
					'A sample form with internationalization.': 'بین الاقوامی کاری کے ساتھ ایک نمونہ فارم.',
					'Enter your password here': 'یہاں اپنا پاس ورڈ درج کریں',
					'Enter your username here': 'یہاں آپ کا صارف نام درج کریں',
					Login: 'لاگ ان',
					Password: 'پاس ورڈ',
					Username: 'صارف کا نام',
				}),
			},

			plugins: [ui, Plugin],
		};

		return (
			<BlueBaseApp {...props}>
				<JsonForm
					schema={
						{
							title: 'Login',

							description: 'A sample form with internationalization.',

							fields: [
								{
									helperText: 'Enter your username here',
									label: 'Username',
									name: 'username',
									placeholder: 'Username',
									type: 'text',
								},
								{
									helperText: 'Enter your password here',
									label: 'Password',
									name: 'username',
									type: 'text',
								},
								{
									name: 'submit',
									title: 'Login',
									type: 'submit',
								},
							],

							initialValues: {} as any,
						} as any
					}
				/>
			</BlueBaseApp>
		);
	})

	.add('With Errors', () => (
		<ScrollView>
			<JsonForm
				schema={{
					title: 'Form Errors',

					description: 'Press Submit button to activate error state',

					fields: [
						{
							name: 'status',
							type: 'status',
						},
						{
							name: 'submit',
							title: 'Login',
							type: 'submit',
						},
					],

					initialValues: {} as any,
					onSubmit: (_values: any, { setErrors, setSubmitting }: any) => {
						setSubmitting(false);
						setErrors({ form: ['An error occurred', 'Another error occurred'] });
					},
				}}
			/>
		</ScrollView>
	))

	.add('Pluggable Form', () => {
		const FormWithFilters = () => (
			<JsonForm
				filter="foo.bar"
				schema={{
					title: 'Pluggable Form',

					description: 'Any plugin can modify this form',

					fields: [
						{
							label: 'Name',
							name: 'name',
							type: 'text',
						},
						{
							name: 'submit',
							title: 'Login',
							type: 'submit',
						},
					],

					initialValues: {} as any,
					onSubmit: (_values: any, { setErrors, setSubmitting }: any) => {
						setSubmitting(false);
						setErrors({ form: ['An error occurred', 'Another error occurred'] });
					},
				}}
			/>
		);

		return (
			<BlueBaseConsumer>
				{(BB: BlueBase) => {
					BB.Filters.register({
						event: 'foo.bar',
						value: schema => ({
							...schema,
							fields: [
								{
									label: 'Username',
									name: 'username',
									type: 'text',
								},
								...schema.fields,
							],
						}),
					});

					return <FormWithFilters />;
				}}
			</BlueBaseConsumer>
		);
	});
