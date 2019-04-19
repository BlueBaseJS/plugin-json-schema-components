import { TextInputProps, getComponent } from '@bluebase/components';
import { BaseFormFieldProps } from '../BaseFormField';
import { StyleProp, ViewStyle } from 'react-native';

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
	style?: StyleProp<ViewStyle>;
	//[key: string]: any
	maxLength ? : number
};

const validate = (props: FormTextInputProps) => (value: string) => {
	const { required, type } = props;

	let error;

	// If field is required //tested
	if (required === true && !value ) {
		error = 'This field is required';
	}

	else if(type === 'text' && /^(0|[1-9]\d*)(\.\d+)?$/.test(value)){
		error = 'Should only be alphabet';
	}

	else if(type === 'date'  ){
		error = value;
	}

	//if number field is incorrect
	else if (type === 'number' && !/^(0|[1-9]\d*)(\.\d+)?$/.test(value)){
		error = 'Please enter a valid number'
	}

	// else if (type === 'password' && value != password ){
	// 	error = 'Password not matched'
	// }

	// If field 'email'
	else if (type === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
		error = 'Please enter a valid email address';
	}

	else if (type === 'url' && !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(value)){

		error = 'Please enter a valid Url';
	}

	return error;
};

export const FormTextInput = (props: FormTextInputProps) => (
	<Field {...props} validate={props.validate || validate(props)}>
		{({ field, form }: any) => {
			const name = props.name;

			const inputProps = {
				...field,
				onChange: undefined,
				...props,
				error: (form.errors[name] && form.touched[name]) || props.error,
				helperText: form.errors[name] || props.helperText,
				
				onChangeText: (text: string) => {
					form.handleChange(name)(text);
				},
			};
			return (<BaseFormField {...inputProps} />);
		}}
	</Field>
);

FormTextInput.defaultProps = {
	MainComponent: TextInput
};