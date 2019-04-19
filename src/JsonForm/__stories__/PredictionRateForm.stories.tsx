import { JsonFormProps } from '..';
import React from 'react';
import { ScrollView } from 'react-native';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';


const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('Prediction Rate', module)


	.add('With default props', () => (
		<ScrollView>
			<JsonForm
				schema = {{
					fields: [
						{
							label: 'Unit Rate',
							name: 'text',
							type: 'text',
							//error : 'Pleas',
							helperText : 'Please provide unit rate',
							placeholder :'Please enter your Asset name',
							
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