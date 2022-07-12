import {
	BlueBase,
	BlueBaseApp,
	BlueBaseConsumer,
	getComponent,
	IntlMessages,
} from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

import Plugin from '../../index';
import { JsonFormProps } from '..';
import { FormTextInput } from '../Fields';
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
							maximumValue: 32,
							minimumValue: 16,
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
							name: 'form-actions2',
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

	.add('Conditional Display', () => (
		<ScrollView>
			<JsonForm
				schema={{
					// onChange: (formik: any) => console.log(formik.values),

					fields: [
						{
							label: 'Name',
							name: 'custom-field',
							type: 'text',
						},
						{
							label: 'Advanced',
							name: 'advanced',
							type: 'checkbox',
						},
						{
							label: 'Conditional Field',
							name: 'conditional',
							type: 'text',
							displayOptions: {
								show: {
									advanced: [true]
								}
							}
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
							label: 'New Fields',
							addButtonLabel: 'Add Name',

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
	})

	.add('Complex Example', () => {
		const Component = () => {
			const [schema, setSchema] = useState<any>({
				dataType: 'NUMBER',
				minimumValue: 16,
				maximumValue: 32,
				step: 1,
			});

			function getFieldType(type?: string) {
				switch (type) {
					case 'STRING':
						return 'text';
					case 'NUMBER':
						return 'number';
					case 'BOOLEAN':
						return 'picker';
					case 'DATE':
						return 'date';
					default:
						return 'text';
				}
			}

			return (
				<View style={{ width: 500 }}>
					<JsonForm
						schema={{
							fields: [
								{
									label: 'Key',
									name: 'key',
									type: 'text',
								},
								{
									label: 'Extends',
									name: 'extends',
									type: 'picker',

									items: [
										{
											label: 'Length',
											value: 'length',
										},
										{
											label: 'Mass',
											value: 'mass',
										},
										{
											label: 'Power',
											value: 'power',
										},
									]
								},
								{
									label: 'Data Type',
									name: 'dataType',
									type: 'picker',

									items: [
										{
											label: 'Boolean',
											value: 'BOOLEAN',
										},
										{
											label: 'Date',
											value: 'DATE',
										},
										{
											label: 'Number',
											value: 'NUMBER',
										},
										{
											label: 'String',
											value: 'STRING',
										},
									],
								},
								{
									label: 'Default Value',
									name: 'defaultValue',
									type: getFieldType(schema.dataType),

									items: schema.dataType === 'BOOLEAN' ? [
										{
											label: '',
											value: undefined,
										},
										{
											label: 'True',
											value: true,
										},
										{
											label: 'False',
											value: false,
										},
									] : [],
								},

								{
									name: 'number-max-min',
									type: 'inline',
									displayOptions: {
										show: {
											dataType: ['NUMBER'],
										}
									},

									fields: [
										{
											label: 'Minimum Value',
											name: 'minimumValue',
											type: 'number',
										},
										{
											label: 'Maximum Value',
											name: 'maximumValue',
											type: 'number',
										},
									],
								},
								{
									name: 'number-step-precision',
									type: 'inline',
									displayOptions: {
										show: {
											dataType: ['NUMBER'],
										}
									},

									fields: [
										{
											label: 'Step',
											name: 'step',
											type: 'number',
										},
										{
											label: 'Precision',
											name: 'precision',
											type: 'number',
										},
									],
								},

								{
									label: 'Unit',
									name: 'unit',
									type: 'text',
									placeholder: schema.unit,
									displayOptions: {
										show: {
											dataType: ['NUMBER'],
										}
									}
								},
								{
									name: 'availableUnitsArray',
									type: 'array',
									label: 'Available Units',
									addButtonLabel: 'Add Units',

									fields: [
										{
											label: 'Unit',
											name: 'availableUnits',
											type: 'text',
										},
									],
									displayOptions: {
										show: {
											dataType: ['NUMBER'],
										}
									}
								},

								{
									name: 'string-length-inline',
									type: 'inline',
									displayOptions: {
										show: {
											dataType: ['STRING'],
										}
									},

									fields: [
										{
											label: 'Maximum Length',
											name: 'maximumLength',
											type: 'number',
										},
										{
											label: 'Minimum Length',
											name: 'minimumLength',
											type: 'number',
										},
									],
								},

								{
									name: 'values',
									type: 'array',
									label: 'Values',
									addButtonLabel: 'Add Value',
									helperText: 'Possible',

									fields: [
										{
											name: 'values-inline',
											type: 'inline',

											fields: [
												{
													label: 'Value',
													name: 'value',
													type: getFieldType(schema.dataType),
													required: true,

													items: schema.dataType === 'BOOLEAN' ? [
														{
															label: 'True',
															value: true,
														},
														{
															label: 'False',
															value: false,
														},
													] : [],
												},
												{
													label: 'Label',
													name: 'label',
													type: 'text',
													required: true,
												},
											],
										},
										{
											label: 'Description',
											name: 'description',
											type: 'text',
										},
									],
								},

								{
									label: 'Required',
									name: 'required',
									type: 'checkbox',
								},

								{
									name: 'array-inline',
									type: 'inline',

									fields: [
										{
											label: 'Array',
											name: 'array',
											type: 'checkbox',
										},
										{
											label: 'Minimum Items',
											name: 'minimumItems',
											type: 'number',
											displayOptions: {
												show: {
													array: [true],
												}
											}
										},
										{
											label: 'Maximum Items',
											name: 'maximumItems',
											type: 'number',
											displayOptions: {
												show: {
													array: [true],
												}
											}
										},
									],
								},

								{
									name: 'validators',
									type: 'array',
									label: 'Validators',
									addButtonLabel: 'Add Validator',

									fields: [
										{
											label: 'Type',
											name: 'type',
											type: 'picker',

											items: [
												{
													label: 'Regex',
													value: 'regex',
												},
												{
													label: 'Template',
													value: 'template',
												},
												{
													label: 'Rule',
													value: 'rule',
												},
											],
										},
										{
											label: 'Value',
											name: 'value',
											type: 'text',
											multiline: true,
										},
									],
								},

								{
									name: 'transformers',
									type: 'array',
									label: 'Transformers',
									addButtonLabel: 'Add Transformer',

									fields: [
										{
											label: 'Type',
											name: 'type',
											type: 'picker',

											items: [
												{
													label: 'Regex',
													value: 'regex',
												},
												{
													label: 'Template',
													value: 'template',
												},
												{
													label: 'Rule',
													value: 'rule',
												},
											],
										},
										{
											label: 'Value',
											name: 'value',
											type: 'text',
											multiline: true,
										},
									],
								},

								{
									name: 'printer',
									type: 'group',
									label: 'Printer',

									fields: [
										{
											label: 'Type',
											name: 'printer.type',
											type: 'picker',

											items: [
												{
													label: 'Template',
													value: 'template',
												},
												{
													label: 'Rule',
													value: 'rule',
												},
											],
										},
										{
											label: 'Value',
											name: 'printer.value',
											type: 'text',
											multiline: true,
										},
									],
								},
							],

							initialValues: { ...schema },
							onSubmit: (values) => {
								console.log('onSubmit', values);
							},

							onChange: (ctx) => {
								console.log('onChange', ctx);
								setSchema(ctx.values);
							},
						}}
					/>
				</View>
			);
		};

		return <Component />;
	});;
