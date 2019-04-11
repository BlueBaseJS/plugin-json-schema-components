import { JsonFormProps } from '..';
import React from 'react';
import { ScrollView } from 'react-native';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

/**
 * @returns
 */
const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('Mevris SignUp', module)

	.add('With default props', () => (
		<ScrollView>
			<JsonForm
				schema = {{
					fields: [
						{
							direction: 'spaceBetween',
							name: 'form-actions',
							type: 'actions',
							//style : {marginTop :20},
							
							fields: [{
								label: 'First Name',
								name: 'username',
								required: true,
								type: 'text',
								//style : {marginRight : 40}
							},
							 {
								label: 'Last Name',
								name: 'username',
								required: true,
								type: 'text',
								style : {flex:1}
							}]
						},
						{
							schema: { component: 'Text',text : 'h' },
							type: 'component',
							title : 'title',
							name : 'name',
							label : 'label'
						
						},
						
                        {
							label: 'Email',
							name: 'email',
							type: 'email',
							required: true,
						},
						{
							label: 'Number',
							name: 'number',
							type: 'number',
						},
						{
							label: 'Password',
							name: 'password',
							type: 'password',
							required: true,
                        },
                        {
							label: 'Confirm Password',
							name: 'confirmPassword',
							type: 'password',
							required: true,
                        },
						{
							label: 'Agree on Terms ?',
							name: 'agreement',
							type: 'checkbox',
							labelPlacement : 'end'

						},
						{
							direction: 'left',
							name: 'form-actions',
							type: 'actions',
							//style : {marginTop :20},
							
							fields: [{
								name: 'submit',
								title: 'SIGN UP',
								type: 'submit',
								color : 'primary'

							}]
						}
					],
					validateOnChange :false,
					validateOnBlur :true,
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