import { JsonFormProps } from '..';
import React from 'react';
import { ScrollView } from 'react-native';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('Mevris Logiin', module)

	.add('With default props', () => (
		<ScrollView>
			<JsonForm
				schema = {{
					fields: [
                        {
							label: 'Email',
							name: 'email',
							type: 'email',
							required: true,
						},
						{
							label: 'Password',
							name: 'password',
							type: 'password',
							required: true,
                        },
						{
							direction: 'right',
							name: 'form-actions',
							type: 'actions',

							fields: [{
								name: 'submit',
								title: 'Login',
								type: 'submit',
								//style  : {alignSelf :'flex-end'}
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