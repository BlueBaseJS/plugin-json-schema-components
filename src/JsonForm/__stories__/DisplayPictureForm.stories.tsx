import { JsonFormProps } from '..';
import React from 'react';
import { ScrollView } from 'react-native';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('Display Picture', module)

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
										component: 'Image',

										props: {
											source: { uri: 'https://www.shareicon.net/data/2016/09/01/822711_user_512x512.png' }
											, style: { borderRadius :50 ,width: 100, height: 100 }
										}

									},
									type: 'component',
								},
								,
								{
									name: 'Save',
									title: 'Choose File',
									type: 'file',
									style : {marginLeft :500}
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