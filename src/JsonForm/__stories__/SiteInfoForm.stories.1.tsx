import { JsonFormProps } from '..';
import React from 'react';
import { ScrollView } from 'react-native';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('Site info Form', module)

	.add('With default props', () => (
		<ScrollView>
			<JsonForm
				schema={{
					fields: [
						{
                            direction: 'left',
                            name: 'form-actions',
                            type: 'actions',
                            fields: [
                                {
                                    schema: {
                                        component: 'View',
										
                                        props: {
                                            
                                            style: { width: 900, height: 80 ,}
                                        }
                                    },
                                    type: 'component',
								},
							
						]
					},
						
						{
							label: 'Enter FeedBack',
							name: 'username',
							type: 'text',
							multiline : true,
							required: false,
						},
						{
							schema: { component: 'Divider' },
							type: 'component',
						},
						
						{
							direction: 'right',
							name: 'form-actions',
							type: 'actions',

							fields: [ {
								name: 'Save',
								title: 'Send',
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