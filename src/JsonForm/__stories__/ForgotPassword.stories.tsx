import { JsonFormProps } from '..';
import React from 'react';
import { ScrollView } from 'react-native';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('Forgot Password', module)

	.add('With default props', () => (
		<ScrollView>
			<JsonForm
				schema = {{
					fields: [
                        {
							label: 'Email',
							name: 'email',
							type: 'email',
							required: false,
						},					

						{
							direction: 'right',
							name: 'form-actions',
							type: 'actions',

							fields: [{
								name: 'submit',
								title: 'Send Email',
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