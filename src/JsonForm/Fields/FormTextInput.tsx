import { TextInput, TextInputProps } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import { useField } from 'formik';
import React from 'react';

import { removeUndefinedProperties } from '../../helpers';
import { BaseFormFieldProps } from '../BaseFormField';

const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');

export type FormTextInputProps<T = {}> = TextInputProps &
	BaseFormFieldProps &
	T & {
		children?: React.ReactNode;
		validate?: (value: any) => string | Promise<void> | undefined;
		name: string;
		type?: string;
		value?: any;
		innerRef?: (instance: any) => void;
	};

export const validateFormTextInput = (props: FormTextInputProps) => (value: string) => {
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
	const [field, meta, helpers] = useField({
		...(props as any),
		validate: props.validate || validateFormTextInput(props),
	});

	const inputProps = {
		...field,
		onChange: undefined,
		...props,
		error: !!meta.error || props.error,
		helperText: meta.error || props.helperText,
		onChangeText: helpers.setValue,

		// Fix for https://github.com/BlueBaseJS/plugin-json-schema-components/issues/32
		// Needs to be investigated why this is happening
		onBlur: undefined,
	};

	return <BaseFormField {...removeUndefinedProperties(inputProps)} />;
};

FormTextInput.defaultProps = {
	MainComponent: TextInput,
};

FormTextInput.displayName = 'FormTextInput';
