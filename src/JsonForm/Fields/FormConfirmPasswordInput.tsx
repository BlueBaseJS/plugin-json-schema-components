import { FormTextInputProps } from './FormTextInput';
import React from 'react';
import { getComponent } from '@bluebase/components';

const FormTextInput = getComponent('FormTextInput');

export interface FormPasswordInputProps extends FormTextInputProps {
	type: 'confirmPassword',
	name: string,
}

export const FormPasswordInput = (props: FormPasswordInputProps) => (
	<FormTextInput {...props} secureTextEntry type="confirmPassword" />
);

