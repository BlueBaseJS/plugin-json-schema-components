import { FormTextInputProps } from './FormTextInput';
import React from 'react';
import { getComponent } from '@bluebase/components';

const FormTextInput = getComponent('FormTextInput');

export interface FormEmailInputProps extends FormTextInputProps {
}

export const FormEmailInput = (props: FormEmailInputProps) => (
	<FormTextInput {...props} type="email" />
);

