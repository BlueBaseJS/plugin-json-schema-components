import { JsonFormProps } from '..';
import React from 'react';
import { ScrollView } from 'react-native';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('Login', module)

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
							direction: 'left',
						   name: 'form-actions',
						   type: 'actions',
						   //textAlignment : 'right',
						   // style : {justifyContent : 'center'},
						   fields: [
							   {
								   schema: {
									   component: 'Text',
									   text : 'Forgot Password?',
									   
									   props : {
										   style : {fontSize : 14}
									   }
								   },
								   type: 'component',
							   },
						   ]
					   },
						
						{
								name: 'submit',
								title: 'Login ',
								type: 'submit',
								//fullWidth : true
						},
						
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