import { Checkbox, CheckboxProps } from '@bluebase/components';
import { Field, getIn } from 'formik';
import { BaseFormField } from '../BaseFormField';
import React from 'react';

export interface FormCheckboxInputProps extends CheckboxProps {
	type: 'checkbox',
	name: string,
}

export const FormCheckboxInput = (props: FormCheckboxInputProps) => {

	return (
		<Field {...props}>
		{({ field, form }: any) => {

			const name = props.name || '';
			const value = getIn(form.values, name);

			const inputProps = {
				...props,
				// ...field,
				checked: Boolean(value),
				onValueChange: (_value: any, checked: boolean) => form.setFieldValue(field.name, checked),
				// value,
			};

			return (<BaseFormField MainComponent={Checkbox} {...inputProps} />);
		}}
	</Field>
	);
};

FormCheckboxInput.defaultProps = {
};
