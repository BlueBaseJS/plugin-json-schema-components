import { JsonFormProps } from '..';
import React from 'react';
import { ScrollView } from 'react-native';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('Seacrh Form', module)

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
										text : 'Explore, Integrate and Manage Your Devices',
                                        props : {
                                            style : {fontWeight :'bold',fontSize : 16}
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
										text : 'Search below to find your device',
                                        props : {
                                            style : {fontWeight :'',fontSize : 14}
                                        }
                                    },
                                    type: 'component',
								},
							]
						},
                        {
							//label: 'Search',
							name: 'search',
							type: 'search',
							required: false,
							//fullWidth : true,
							variant : "outlined",
							placeholder : "Search",


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