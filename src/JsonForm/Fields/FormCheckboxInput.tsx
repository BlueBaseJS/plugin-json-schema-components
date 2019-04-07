import { Checkbox, CheckboxProps, getComponent } from '@bluebase/components';
import { Field, getIn } from 'formik';
import { BaseFormFieldProps } from '../BaseFormField';
import React from 'react';

export interface FormCheckboxInputProps extends CheckboxProps {
	type: 'checkbox',
	name: string,
}

const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');

export const FormCheckboxInput = (props: FormCheckboxInputProps) => {

	return (
		<Field {...props}>
		{({ field, form }: any) => {

			const name = props.name;
			const value = getIn(form.values, name);

			const inputProps = {
				...props,
				checked: Boolean(value),
				onValueChange: (_value: any, checked: boolean) => form.setFieldValue(field.name, checked),
			};

			return (<BaseFormField MainComponent={Checkbox} {...inputProps} />);
		}}
	</Field>
	);
};

FormCheckboxInput.defaultProps = {
};
