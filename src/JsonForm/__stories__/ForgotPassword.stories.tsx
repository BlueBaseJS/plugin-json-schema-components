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
                            direction: 'left',
                            name: 'form-actions',
							type: 'actions',
							
                            fields: [
                                {
                                    schema: {
										component: 'Text',
										text : 'Forgot Password',
										
                                        props : {
                                            style : {fontWeight :'bold',fontSize : 18}
                                        }
                                    },
                                    type: 'component',
								},
							]
						},
						{
                            direction: 'left',
                            name: 'form-actions',
                            type: 'actions',
                            fields: [
                                {
                                    schema: {
										component: 'Text',
										text : 'Please enter the email address associated with your account and we will email you a link to reset your password',
                                        props : {
                                            style : {fontSize : 14}
                                        }
                                    },
                                    type: 'component',
								},
							]
						},
                               

                            
                        
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
								title: 'Send Reset Link ',
								type: 'submit',
								nested: true
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