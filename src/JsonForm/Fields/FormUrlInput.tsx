import { FormTextInputProps } from './FormTextInput';
import React from 'react';
import { getComponent } from '@bluebase/components';

const FormTextInput = getComponent('FormTextInput');

export interface FormUrlInputProps extends FormTextInputProps {
}

export const FormUrlInput = (props: FormUrlInputProps) => (
	<FormTextInput {...props} type="number" />
);

