import { Radio, RadioGroup, RadioGroupProps, RadioProps, getComponent } from '@bluebase/components';
import { BaseFormFieldProps } from '../BaseFormField';
import { Field } from 'formik';
import React from 'react';

export interface FormRadioGroupInputProps extends RadioGroupProps {
	type: 'radio-group',
	name: string,
	items: RadioProps[],
}

const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');

export const FormRadioGroupInput = ({ type, items, ...props }: FormRadioGroupInputProps) => {

	return (
		<Field {...props}>
		{({ field, form }: any) => {

			const inputProps: any = {
				...props,
				...field,

				onValueChange: (value: any) =>
				{
					form.setFieldValue(field.name, value);
					if (value !== undefined && props.onValueChange) {
						props.onValueChange( value);
					}
				}
			};

			return (
				<BaseFormField MainComponent={RadioGroup} {...inputProps}>
				{items.map(i => <Radio key={String(i.value)} {...i} />)}
				</BaseFormField>
			);
		}}
		</Field>
	);
};

FormRadioGroupInput.defaultProps = {
};
