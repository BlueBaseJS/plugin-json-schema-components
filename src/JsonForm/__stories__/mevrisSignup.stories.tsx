import { JsonFormProps } from '..';
import React from 'react';
import { ScrollView } from 'react-native';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('Mevris SignUp', module)

	.add('With default props', () => (
		<ScrollView>
			<JsonForm
				schema = {{
					fields: [
						{
							label: 'First Name',
							name: 'username',
							required: true,
                            type: 'text',
                            direction : 'left'
						},
						
                        {
							label: 'Email',
							name: 'email',
							type: 'email',
							required: false,

						},
						{
							label: 'Password',
							name: 'password',
							type: 'password',
							required: false,

                        },
                        {
							label: 'Confirm Password',
							name: 'confirmPassword',
							type: 'password',
							required: false,

                        },
						{
							label: 'Agree on Terms ?',
							name: 'agreement',
							type: 'checkbox',
						},
					
						{
							direction: 'right',
							name: 'form-actions',
							type: 'actions',

							fields: [{
								name: 'submit',
								title: 'SIGN UP',
								type: 'submit',
							}]
						}
					],
					initialValues: {
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
		</ScrollView>
	));