import { JsonFormProps } from '..';
import React from 'react';
import { ScrollView } from 'react-native';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('Add sites', module)

	.add('With default props', () => (
		<ScrollView>
			<JsonForm
				schema = {{
					fields: [
                        {
							label: 'Site Name',
							name: 'username',
							type: 'text',
							required: false,
						},
						{
							label: 'Site Type',
							name: 'lang',
							type: 'picker',

							items: [{
								label: 'Office',
								value: 'js'
							}, {
								label: 'Work',
								value: 'java'
							},{
								label: 'Home',
								value: 'java'
							}]
						},

						{
							direction: 'right',
							name: 'form-actions',
							type: 'actions',

							fields: [{
								name: 'cancel',
								type: 'reset',
								title : 'cancel'
							}, {
								name: 'Save',
								title: 'Save',
								type: 'submit',
							}]
						}


					
					],
					initialValues: {
					},
					onSubmit: (values, form) => {
						// tslint:disable-next-line: no-console
						console.log('Email sent', values);

						setTimeout(() => {
							form.setSubmitting(false);
						}, 2000);
					},
				}}
			/>
		</ScrollView>
	));