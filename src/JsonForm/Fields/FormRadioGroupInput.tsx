import { Radio, RadioGroup, RadioGroupProps, RadioProps } from '@bluebase/components';
import { BaseFormFieldProps } from '../BaseFormField';
import { Field } from 'formik';
import React from 'react';
import { getComponent } from '@bluebase/core';

export interface FormRadioGroupInputProps extends RadioGroupProps {
	type: 'radio-group',
	name: string,
	items: RadioProps[],
}

const BaseFormField = getComponent <BaseFormFieldProps>('BaseFormField');

export const FormRadioGroupInput = ({ type, items, ...props }: FormRadioGroupInputProps) => {

	return (
		<Field {...props}>
		{({ field, form }: any) => {

			const inputProps: any = {
				...props,
				...field,
				onValueChange: (v: any) => form.setFieldValue(field.name, v),
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
