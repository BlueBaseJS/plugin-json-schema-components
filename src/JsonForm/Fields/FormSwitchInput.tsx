import { Field, getIn } from 'formik';
import { Switch, SwitchProps, getComponent } from '@bluebase/components';
import { BaseFormFieldProps } from '../BaseFormField';
import React from 'react';

export interface FormSwitchInputProps extends SwitchProps {
	type: 'switch',
	name: string,
}

const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');

export const FormSwitchInput = ({ type, ...props }: FormSwitchInputProps) => {

	return (
		<Field {...props}>
		{({ field, form }: any) => {

			const name = props.name || '';
			const value = getIn(form.values, name);

			const inputProps: any = {
				labelPlacement: 'start',
				...props,
				// ...field,
				checked: Boolean(value),
				onValueChange: (_value: any, checked: boolean) => form.setFieldValue(field.name, checked),
			};

			return (<BaseFormField MainComponent={Switch} {...inputProps} />);
		}}
	</Field>
	);
};

FormSwitchInput.defaultProps = {
};