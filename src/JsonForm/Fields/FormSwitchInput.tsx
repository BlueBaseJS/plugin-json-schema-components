import { BlueBase, BlueBaseConsumer, getComponent } from '@bluebase/core';
import { Field, getIn } from 'formik';
import { Switch, SwitchProps } from '@bluebase/components';

import { BaseFormFieldProps } from '../BaseFormField';
import React from 'react';

export interface FormSwitchInputProps extends SwitchProps {
	type: 'switch';
	name: string;
}

const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');

export const FormSwitchInput = ({ type, ...props }: FormSwitchInputProps) => {
	return (
		<BlueBaseConsumer>
			{(BB: BlueBase) => (
				<Field {...props}>
					{({ field, form }: any) => {
						const name = props.name;
						const value = getIn(form.values, name);

						const inputProps: any = {
							labelPlacement: 'start',
							...props,
							checked: Boolean(value),
							onValueChange: (_value: any, checked: boolean) =>
								form.setFieldValue(field.name, checked),
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
					}}
				</Field>
			)}
		</BlueBaseConsumer>
	);
};

FormSwitchInput.defaultProps = {};
