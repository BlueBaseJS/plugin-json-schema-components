import { Subtitle2, TextInputProps } from '@bluebase/components';
import { Theme, getComponent } from '@bluebase/core';

import { BaseFormFieldProps } from '../BaseFormField';
import { Field } from 'formik';
import React from 'react';
import { ViewStyle } from 'react-native';

const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');
const TextInput = getComponent<TextInputProps>('TextInput');

export interface FormTextInputStyles {

	root?: ViewStyle
}
export type FormTextInputProps<T = {}> = TextInputProps & BaseFormFieldProps & T & {
	children?: React.ReactNode;
	validate?: ((value: any) => string | Promise<void> | undefined);
	name: string;
	type?: string;
	value?: any;
	styles?: FormTextInputStyles;
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

export const FormTextInput = (props: FormTextInputProps) => {
	const { styles = {} } = props;

	return (
		<Field {...props} validate={props.validate || validate(props)}>
			{({ field, form }: any) => {

				const name = props.name;

				const inputProps = {
					...field,
					onChange: undefined,
					...props,
					error: (form.errors[name] && form.touched[name]) || props.error,
					helperText: form.errors[name] ? <Subtitle2 style={styles.root}>{form.errors[name]}</Subtitle2> : props.helperText,
					onChangeText: (text: string) => {
						form.handleChange(name)(text);
						// props.onChangeText && props.onChangeText(text);
					},
				};

				return (<BaseFormField {...inputProps} />);
			}}
		</Field>
	)
};

FormTextInput.defaultProps = {
	MainComponent: TextInput
};

FormTextInput.defaultStyles = (_theme: Theme) => ({

	root: {
		color: 'red'
	}
});
