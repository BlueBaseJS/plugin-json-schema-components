import { Slider, SliderProps } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import { useField } from 'formik';
import React from 'react';

import { BaseFormFieldProps } from '../BaseFormField';

export interface FormRangeInputProps extends SliderProps {
	type: 'range',
	name: string,
	min?: number;
	max?: number;
	step?: number;
}

const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');

export const FormRangeInput = ({ min, max, ...rest }: FormRangeInputProps) => {

	const props = {
		...rest,
		maximumValue: max,
		minimumValue: min,
	};

	const [field,, helpers] = useField(props as any);
	const { setValue } = helpers;

	const inputProps = {
		...props,
		name: field.name,
		onValueChange: setValue,
		showValue: true,
		value: field.value,
	};

	return (<BaseFormField MainComponent={Slider} {...inputProps} />);
};

FormRangeInput.defaultProps = {
};
