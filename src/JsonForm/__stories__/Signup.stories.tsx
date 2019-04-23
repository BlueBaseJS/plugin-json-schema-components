import { JsonFormProps } from '..';
import React from 'react';
import { ScrollView } from 'react-native';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

/**
 * @returns
 */
const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('SignUp', module)

	.add('With default props', () => (
		<ScrollView>
			<JsonForm
				schema = {{
					fields: [
						{
							name: 'form-actions',
							type: 'actions',
							direction : 'space-between',
							style : {flex:1},
							
							fields: [{
								label: 'First Name',
								name: 'firstName',
								required: true,
								type: 'text',
							},
							 {
								label: 'Last Name',
								name: 'lastName',
								required: true,
								type: 'text',
							}]
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
							

						}
					
						
				
						,{
							name: 'submit',
							title: 'SIGN UP',
							type: 'submit',
							color : 'primary',
							
						},
						
						{
							direction: 'left',
						   name: 'form-actions',
						   type: 'actions',
						//    style : {justifyContent : 'center'},
						   fields: [
							   {
								   schema: {
									   component: 'Text',
									   text : 'Already Registered ?',
									   
									   props : {
										   style : {fontSize : 14}
									   }
								   },
								   type: 'component',
							   },
						   ]
					   }
						
					],
					validateOnChange :false,
					validateOnBlur :true,
					initialValues: {
					},
					onSubmit: (values, form) => {
						// tslint:disable-next-line: no-console
						console.log('SignUp form submitted by following values', values);

						setTimeout(() => {
							form.setSubmitting(false);
						}, 2000);
					},
				}}
			/>
		</ScrollView>
	));