import { Checkbox, CheckboxProps } from '@bluebase/components';
import { getComponent, useBlueBase } from '@bluebase/core';
import { useField } from 'formik';
import React from 'react';

import { BaseFormFieldProps } from '../BaseFormField';

export interface FormCheckboxInputProps extends CheckboxProps {
	type: 'checkbox';
	name: string;
}

const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');

export const FormCheckboxInput = (props: FormCheckboxInputProps) => {

	const BB = useBlueBase();
	const [field, , helpers] = useField(props as any);
	const { setValue } = helpers;
	const value = field.value;

	const inputProps = {
		...props,
		checked: Boolean(value),
		onValueChange: (_value: any, checked: boolean) =>
			setValue(checked),
	};

	// Dirty Hack: We have to reduce vertical padding because
	// MUI checkboxes have their own padding
	const styles: any = {};
	const source = BB.Components.getMeta('Checkbox', 'source', {});
	if (source && source.type === 'plugin' && source.key === 'material-ui') {
		styles.root = {
			paddingVertical: 4,
		};
	}

	// End of Dirty Hack
	return (
		<BaseFormField
			MainComponent={Checkbox}
			styles={styles}
			// Other props
			checked={inputProps.checked}
			color={inputProps.color}
			disabled={inputProps.disabled}
			onValueChange={inputProps.onValueChange}
			value={inputProps.value}
			label={inputProps.label}
			labelPlacement={inputProps.labelPlacement}
			indeterminate={inputProps.indeterminate}
			id={inputProps.id}
			name={inputProps.name}
			style={inputProps.style}
		/>
	);
};

FormCheckboxInput.defaultProps = {};
