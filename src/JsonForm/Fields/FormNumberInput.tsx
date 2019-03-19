import { FormTextInputProps } from './FormTextInput';
import React from 'react';
import { getComponent } from '@bluebase/components';

const FormTextInput = getComponent('FormTextInput');

export interface FormNumberInputProps extends FormTextInputProps {
}

export const FormNumberInput = (props: FormNumberInputProps) => (
	<FormTextInput {...props} type="number" />
);

