import { JsonFormProps } from '..';
import React from 'react';
import { ScrollView } from 'react-native';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

/**
 * @returns
 */
const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('Delete Site Form', module)

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
										text : 'Remove Site',
										
                                        props : {
                                            style : {fontWeight :'bold',fontSize : 18}
                                        }
                                    },
                                    type: 'component',
								},
							]
						},
						{
							name: 'form-actions',
							type: 'actions',
							direction : 'space-between',
							
							fields: [{
								direction: 'left',
							   name: 'form-actions',
							   type: 'actions',
							   fields: [
								   {
									   schema: {
										   component: 'Text',
										   text : 'Do you want to remove your site?',
										   
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
							title: 'Delete',
							type: 'submit',
							color : 'secondary',
							
						},]

					
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