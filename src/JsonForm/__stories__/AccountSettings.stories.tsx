import { JsonFormProps } from '..';
import React from 'react';
import { ScrollView } from 'react-native';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('Account Settings', module)

	.add('General', () => (
		<ScrollView>
			<JsonForm
				schema = {{
					fields: [
                        {
							label: 'First Name',
							name: 'username',
							type: 'text',
							required: false,

                        },
                        {
							label: 'Last Name',
							name: 'username',
							type: 'text',
							required: false,

						},
						{
							direction: 'right',
							name: 'form-actions',
							type: 'actions',

							fields: [{
								name: 'submit',
								title: 'Save',
                                type: 'submit',
								nested :true
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
    ))
    
    .add('Change Password', () => (
		<ScrollView>
			<JsonForm
				schema = {{
					fields: [
                        {
							label: 'Old password',
							name: 'password',
							type: 'password',
							required: false,

                        },
                        {
							label: 'New password',
							name: 'newPassword',
							type: 'password',
							required: true,

						},
						{
							label: 'Confirm password',
							name: 'confirmPassword',
							type: 'confirmPassword',
							required: true,
							

						},
					
						{
							direction: 'right',
							name: 'form-actions',
							type: 'actions',

							fields: [{
								name: 'submit',
								title: 'Save',
                                type: 'submit',
								nested :true
								
								
							}]
						}

					
					],
					initialValues: {
					},
					onSubmit: (values, form) => {
						// tslint:disable-next-line: no-console
						console.log('Password changed', values);

						setTimeout(() => {
							form.setSubmitting(false);
						}, 2000);
					},
				}}
			/>
		</ScrollView>
	))
	
	.add('Change Email', () => (
		<ScrollView>
			<JsonForm
				schema = {{
					fields: [
					
						
                        {
							label: 'Password',
							name: 'newPassword',
							type: 'password',
							required: true,

						},
						{
							label: 'New Email',
							name: 'email',
							type: 'email',
							required: true,
						},
					
						{
							direction: 'right',
							name: 'form-actions',
							type: 'actions',

							fields: [{
								name: 'submit',
								title: 'Update',
                                type: 'submit',
								nested :true
								
							}]
						}

					
					],
					initialValues: {
					},
					onSubmit: (values, form) => {
						// tslint:disable-next-line: no-console
						console.log('Email Changed', values);

						setTimeout(() => {
							form.setSubmitting(false);
						}, 2000);
					},
				}}
			/>
		</ScrollView>
    ))
    
    
    
    ;