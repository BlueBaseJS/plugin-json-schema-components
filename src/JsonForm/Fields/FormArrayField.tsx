import { Button, IconButton, View } from '@bluebase/components';
import { FieldArray, useField } from 'formik';
import { FieldWrapperProps, FormFields } from '../FormFields';
import { Theme, useStyles, useTheme } from '@bluebase/core';

import { FormFieldProps } from './FormFieldProps';
import React from 'react';
import { ViewStyle } from 'react-native';

export interface FormArrayFieldStyles {
	root: ViewStyle;
	fieldActions: ViewStyle;
	fieldItemActions: ViewStyle;
}

export interface FormArrayFieldProps {
	type: 'array';
	name: string;
	fields: FormFieldProps[];
	style?: ViewStyle;
	styles?: Partial<FormArrayFieldStyles>;
}

const FieldWrapper = ({ field, children }: FieldWrapperProps) => {
	const { theme } = useTheme();

	return (
		<View
			testID="fieldTest"
			key={field.name}
			style={{
				flex: 1,
				margin: -theme.spacing.unit,
			}}
		>
			{children}
		</View>
	);
};

const defaultStyles = (theme: Theme): FormArrayFieldStyles => ({
	root: {
		flexDirection: 'row',
		padding: theme.spacing.unit,
	},

	fieldActions: {
		alignItems: 'flex-start',
		padding: theme.spacing.unit * 2,
	},

	fieldItemActions: {
		justifyContent: 'center',
	},
});

/**
 * A component that renders form actions, i.e. submit or reset buttons
 * @param props
 */
export const FormArrayField = (props: FormArrayFieldProps) => {
	const { style } = props;
	const { theme } = useTheme();
	const styles = useStyles<FormArrayFieldStyles>('FormArrayField', props, defaultStyles);

	const [field] = useField<any[]>(props.name);
	const { value = [], name } = field;

	function getFields(index: number) {
		return (props.fields || []).map(f => ({ ...f, name: `${name}[${index}].${f.name}` }));
	}

	return (
		<FieldArray name={name}>
			{({ push, remove }) => (
				<React.Fragment>
					{value.map((_val, index) => (
						<View key={index} style={[styles.root, style]} testID="form-array-item">
							<FormFields {...props} fields={getFields(index)} FieldWrapper={FieldWrapper} />
							<View style={styles.fieldItemActions} testID="form-item-actions">
								<IconButton
									name="minus"
									size={theme.spacing.unit * 2}
									// tslint:disable-next-line: jsx-no-lambda
									onPress={() => remove(index)}
								/>
							</View>
						</View>
					))}
					<View style={styles.fieldActions}>
						<Button
							title="Add"
							variant="outlined"
							icon={{ type: 'icon', name: 'plus' }}
							// tslint:disable-next-line: jsx-no-lambda
							onPress={() => push({})}
						/>
					</View>
				</React.Fragment>
			)}
		</FieldArray>
	);
};

FormArrayField.displayName = 'FormArrayField';

FormArrayField.defaultProps = {};
