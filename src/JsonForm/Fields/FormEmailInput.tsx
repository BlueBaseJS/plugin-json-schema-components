import { FormTextInputProps } from './FormTextInput';
import React from 'react';
import { getComponent } from '@bluebase/core';

const FormTextInput = getComponent('FormTextInput');

export interface FormEmailInputProps extends FormTextInputProps {
	type: 'email',
	name: string,
}

export const FormEmailInput = (props: FormEmailInputProps) => (
	<FormTextInput {...props} type="email" keyboardType="email-address" />
);

