import { FormTextInputProps } from './FormTextInput';
import React from 'react';
import { getComponent } from '@bluebase/components';

const FormTextInput = getComponent('FormTextInput');

export interface FormUrlInputProps extends FormTextInputProps {
	type: 'url',
	name: string,
}

export const FormUrlInput = (props: FormUrlInputProps) => (
	<FormTextInput {...props} type="number" />
);

