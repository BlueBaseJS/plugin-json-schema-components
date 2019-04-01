import { Slider, SliderProps, Text } from '@bluebase/components';
import { BaseFormField } from '../BaseFormField';
import { Field } from 'formik';
import React from 'react';

export interface FormRangeInputProps extends SliderProps {
	type: 'checkbox',
	name: string,
	min?: number;
	max?: number;
	step?: number;
}

export const FormRangeInput = ({ min, max, ...rest }: FormRangeInputProps) => {

	const props = {
		...rest,
		maximumValue: max,
		minimumValue: min,
	};

	return (
		<Field {...props}>
		{({ field, form }: any) => {

			// const name = props.name || '';
			// const value = getIn(form.values, name);

			const inputProps = {
				...props,
				...field,
				// checked: Boolean(value),
				onValueChange: (value: any) => form.setFieldValue(field.name, value),
				// value,
			};

			return (<BaseFormField MainComponent={Slider} right={<Text>{field.value}</Text>} {...inputProps} />);
		}}
	</Field>
	);
};

FormRangeInput.defaultProps = {
};
