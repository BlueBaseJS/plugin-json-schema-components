import { JsonFormProps } from '..';
import React from 'react';
import { ScrollView } from 'react-native';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

/**
 * @returns
 */
const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('Wifi Setting Form', module)

	.add('Wifi', () => (
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
											text : 'Add Network',
											
											props : {
												style : {fontWeight :'bold',fontSize : 18}
											}
										},
										type: 'component',
									},
								]
							},
						
							{
								label: 'Security',
								name: 'security',
								type: 'picker',
				  
				  
				  
								items: [{
								  label: 'None',
								  value: 'js'
								}, {
								  label: 'Web',
								  value: 'web'
								}, {
								  label: 'WPA/WPA2/FT',
								  value: 'wpa'
								}]
							  },

							  {
								direction: 'left',
								name: 'form-actions',
								type: 'actions',
								fields: [
									{
										schema: {
											component: 'Checkbox',
											props : {
												style : {padding :0}
											}
										},
										type: 'component',
									},
									{
										schema: {
											component: 'Text', text: 'Show advanced options',
											props: {
												style: { marginLeft: 5,marginTop :4 }
											},
										},
										type: 'component'
									}
	
								]
							},
							{
								label: 'IP settings',
								name: 'security',
								type: 'picker',

								items: [{
								  label: 'DHCP',
								  value: 'dhcp'
								}, {
								  label: 'Static',
								  value: 'static'
								}]
							  },
							  {
								label: 'Proxy',
								name: 'security',
								type: 'picker',
								
								items: [{
								  label: 'None',
								  value: 'none'
								}, {
								  label: 'Manual',
								  value: 'manual'
								},
								{
									label: 'Auto-config',
									value: 'auto'
								  }]
							  },

						
						
					],
					validateOnChange :false,
					validateOnBlur :true,
					initialValues: {
					},
					onSubmit: (values, form) => {
						// tslint:disable-next-line: no-console
						console.log('', values);

						setTimeout(() => {
							form.setSubmitting(false);
						}, 2000);
					},
				}}
			/>
		</ScrollView>
	));