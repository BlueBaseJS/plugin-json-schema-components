import { Picker, PickerItemProps, PickerProps, getComponent } from '@bluebase/components';
import { BaseFormFieldProps } from '../BaseFormField';
import { Field } from 'formik';
import React from 'react';

export interface FormPickerInputProps extends PickerProps {
	type: 'picker',
	name: string,
	items: PickerItemProps[],
}

const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');

export const FormPickerInput = ({ type, items, ...props }: FormPickerInputProps) => {

	return (
		<Field {...props}>
			{({ field, form }: any) => {

				const inputProps: any = {
					...props,
					...field,
					onValueChange: (value: any) => {
						form.setFieldValue(field.name, value);

						if (value !== undefined && props.onValueChange) {
							props.onValueChange(field.name, value)
						}
					}
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
