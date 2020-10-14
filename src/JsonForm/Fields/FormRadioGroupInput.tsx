import { Radio, RadioGroup, RadioGroupProps, RadioProps } from '@bluebase/components';

import { BaseFormFieldProps } from '../BaseFormField';
import React from 'react';
import { getComponent } from '@bluebase/core';
import { useField } from 'formik';

export interface FormRadioGroupInputProps extends RadioGroupProps {
	type: 'radio-group',
	name: string,
	items: RadioProps[],
}

const BaseFormField = getComponent <BaseFormFieldProps>('BaseFormField');

export const FormRadioGroupInput = ({ type, items, ...props }: FormRadioGroupInputProps) => {

	const [field,, helpers] = useField(props as any);
	const { setValue } = helpers;

	const inputProps: any = {
		...props,
		...field,
		onValueChange: setValue,
	};

	return (
		<BaseFormField MainComponent={RadioGroup} {...inputProps}>
			{items.map(i => <Radio key={String(i.value)} {...i} />)}
		</BaseFormField>
	);
};

FormRadioGroupInput.defaultProps = {
};
