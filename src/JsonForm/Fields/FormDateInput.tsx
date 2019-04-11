import { FormTextInputProps } from './FormTextInput';
import React from 'react';
import { getComponent } from '@bluebase/components';

const FormTextInput = getComponent('FormTextInput');

export interface FormDateInputProps extends FormTextInputProps {
	type: 'date',
	name: string,
}
export const FormDateInput = (props: FormDateInputProps) => (
	<FormTextInput {...props} type="date" />
);

