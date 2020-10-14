import { Switch, SwitchProps } from '@bluebase/components';
import { getComponent, useBlueBase } from '@bluebase/core';

import { BaseFormFieldProps } from '../BaseFormField';
import React from 'react';
import { useField } from 'formik';

export interface FormSwitchInputProps extends SwitchProps {
	type: 'switch';
	name: string;
}

const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');

export const FormSwitchInput = ({ type, ...props }: FormSwitchInputProps) => {

	const BB = useBlueBase();
	const [field, , helpers] = useField(props as any);

	const { setValue } = helpers;
	const value = field.value;

	const inputProps: any = {
		labelPlacement: 'start',
		...props,
		checked: Boolean(value),
		onValueChange: (_value: any, checked: boolean) =>
			setValue(checked),
	};

	// Dirty Hack: We have to reduce vertical padding because
	// MUI checkboxes have their own padding
	const styles: any = {};
	const source = BB.Components.getMeta('Switch', 'source', {});

	if (source.type === 'plugin' && source.key === 'material-ui') {
		styles.root = {
			paddingVertical: 4,
		};
	}
	// End of Dirty Hack

	return <BaseFormField MainComponent={Switch} styles={styles} {...inputProps} />;
};

FormSwitchInput.defaultProps = {};
