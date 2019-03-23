import { TextInputProps, getComponent } from '@bluebase/components';
import { BaseFormFieldProps } from '../BaseFormField';
import { Field } from 'formik';
import React from 'react';

const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');
const TextInput = getComponent<TextInputProps>('TextInput');

export type FormTextInputProps<T = {}> = TextInputProps & BaseFormFieldProps & T & {
	children?: React.ReactNode;
	validate?: ((value: any) => string | Promise<void> | undefined);
	name: string;
	type?: string;
	value?: any;
	innerRef?: (instance: any) => void;
};

const validate = (props: FormTextInputProps) => (value: string) => {
	const { required, type } = props;

	let error;

	// If field is required
	if (required === true && !value) {
		error = 'This field is required';
	}

	// If field 'email'
	else if (type === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
		error = 'Please enter a valid email address';
	}

	return error;
};

export const FormTextInput = (props: FormTextInputProps) => (
	<Field {...props} validate={props.validate || validate(props)}>
		{({ field, form }: any) => {

			const name = props.name || '';

			const inputProps = {
				...props,
				...field,
				error: (form.errors[name] && form.touched[name]) || props.error,
				helperText: (form.errors[name]) || props.helperText,
			};

			return (<BaseFormField {...inputProps} />);
		}}
	</Field>
);

FormTextInput.defaultProps = {
	MainComponent: TextInput
};