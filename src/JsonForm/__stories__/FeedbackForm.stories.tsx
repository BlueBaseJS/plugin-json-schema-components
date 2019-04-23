import { JsonFormProps } from '..';
import React from 'react';
import { ScrollView } from 'react-native';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('Feed Back Form', module)

	.add('With default props', () => (
		<ScrollView>
			<JsonForm
				schema={{
					fields: [
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
								nested : true
							}]
						}



					],
					initialValues: {
					},
					onSubmit: (values, form) => {
						// tslint:disable-next-line: no-console
						console.log('FeedBack sent', values);

						setTimeout(() => {
							form.setSubmitting(false);
						}, 2000);
					},
				}}
			/>
		</ScrollView>
	));