import { FormTextInputProps } from './FormTextInput';
import React from 'react';
import { getComponent } from '@bluebase/components';

const FormTextInput = getComponent('FormTextInput');

export interface FormNumberInputProps extends FormTextInputProps {

	type: 'number',

	/** The maximum value to accept for this input */
	max?: number;

	/** The minimum value to accept for this input */
	min?: number;

	/** A stepping interval to use when using up and down arrows to adjust the value, as well as for validation */
	step?: number;
}

export const FormNumberInput = (props: FormNumberInputProps) => (
	<FormTextInput {...props} type="number" />
);

