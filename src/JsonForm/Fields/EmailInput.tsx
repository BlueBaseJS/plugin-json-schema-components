import { TextInputProps, getComponent } from '@bluebase/components';
import { Field } from 'formik';
import React from 'react';

const TextInput = getComponent<TextInputProps>('TextInput');

export interface EmailInputProps extends TextInputProps {
}

export const EmailInput = (props: EmailInputProps) => (
	<Field {...props}>
		{(field: any) => (<TextInput {...props} {...field} type="email" />)}
	</Field>
);

EmailInput.defaultProps = {
	validate: (value: string) => {
		let error;
		if (!value) {
			error = 'Required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error = 'Invalid email address';
		}
		return error;
	}
};
