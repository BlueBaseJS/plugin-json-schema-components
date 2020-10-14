import { Picker, PickerItemProps, PickerProps } from '@bluebase/components';

import { BaseFormFieldProps } from '../BaseFormField';
import React from 'react';
import { getComponent } from '@bluebase/core';
import { useField } from 'formik';

export interface FormPickerInputProps extends PickerProps {
	type: 'picker',
	name: string,
	items: PickerItemProps[],
}

const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');

export const FormPickerInput = ({ type, items, ...props }: FormPickerInputProps) => {

	const [field,, helpers] = useField(props as any);
	const { setValue } = helpers;

	const inputProps: any = {
		...props,
		...field,
		onValueChange: setValue,
		selectedValue: field.value,
	};

	return (
		<BaseFormField MainComponent={Picker} {...inputProps}>
			{items.map(i => <Picker.Item key={String(i.value)} {...i} />)}
		</BaseFormField>
	);
};

FormPickerInput.defaultProps = {
};
