import { Picker, PickerItemProps, PickerProps } from '@bluebase/components';
import { BaseFormField } from '../BaseFormField';
import { Field } from 'formik';
import React from 'react';

export interface FormPickerInputProps extends PickerProps {
	type: 'picker',
	name: string,
	items: PickerItemProps[],
}

export const FormPickerInput = ({ type, items, ...props }: FormPickerInputProps) => {

	return (
		<Field {...props}>
		{({ field, form }: any) => {

			// const name = props.name || '';
			// const value = getIn(form.values, name);

			const inputProps: any = {
				...props,
				...field,
				onValueChange: (v: any) => form.setFieldValue(field.name, v),
				selectedValue: field.value,
			};

			return (
				<BaseFormField MainComponent={Picker} {...inputProps}>
				{items.map(i => <Picker.Item key={String(i.value)} {...i} />)}
				</BaseFormField>
			);
		}}
		</Field>
	);
};

FormPickerInput.defaultProps = {
};
