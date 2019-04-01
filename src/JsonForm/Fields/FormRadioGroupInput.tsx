import { Field, getIn } from 'formik';
import { RadioGroup, RadioGroupProps, RadioProps, Radio } from '@bluebase/components';
import { BaseFormField } from '../BaseFormField';
import React from 'react';

export interface FormRadioGroupInputProps extends RadioGroupProps {
	type: 'radio-group',
	name: string,
	items: RadioProps[],
}

export const FormRadioGroupInput = ({ type, items, ...props }: FormRadioGroupInputProps) => {

	return (
		<Field {...props}>
		{({ field, form }: any) => {

			const name = props.name || '';
			const value = getIn(form.values, name);

			const inputProps: any = {
				...props,
				// ...field,
				checked: Boolean(value),
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
