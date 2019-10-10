import { BlueBase, BlueBaseConsumer, getComponent } from '@bluebase/core';
import { Checkbox, CheckboxProps } from '@bluebase/components';
import { Field, getIn } from 'formik';

import { BaseFormFieldProps } from '../BaseFormField';
import React from 'react';

export interface FormCheckboxInputProps extends CheckboxProps {
	type: 'checkbox';
	name: string;
}

const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');

export const FormCheckboxInput = (props: FormCheckboxInputProps) => {
	return (
		<BlueBaseConsumer>
			{(BB: BlueBase) => (
				<Field {...props}>
					{({ field, form }: any) => {
						const name = props.name;
						const value = getIn(form.values, name);

						const inputProps = {
							...props,
							checked: Boolean(value),
							onValueChange: (_value: any, checked: boolean) =>
								form.setFieldValue(field.name, checked),
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

						return <BaseFormField MainComponent={Checkbox} styles={styles} {...inputProps} />;
					}}
				</Field>
			)}
		</BlueBaseConsumer>
	);
};

FormCheckboxInput.defaultProps = {};
