import { Button, IconButton, Text, View } from '@bluebase/components';
import { Theme, useStyles, useTheme } from '@bluebase/core';
import { FieldArray, useField } from 'formik';
import React from 'react';
import { ViewStyle } from 'react-native';

import { FieldWrapperProps, FormFields } from '../FormFields';
import { FormFieldProps } from './FormFieldProps';

export interface FormArrayFieldStyles {
	root: ViewStyle;
	fieldActions: ViewStyle;
	fieldItemActions: ViewStyle;
	textField: ViewStyle;
}

export interface FormArrayFieldProps {
	type: 'array';
	name: string;
	label: string;
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
		padding: theme.spacing.unit * 2,
		flexDirection: 'row',
		alignItems: 'center'
	},

	fieldItemActions: {
		justifyContent: 'center',
	},
	textField: {
		paddingHorizontal: 10
	}
});

/**
 * A component that renders form actions, i.e. submit or reset buttons
 * @param props
 */
export const FormArrayField = (props: FormArrayFieldProps) => {
	const { style, label } = props;
	const { theme } = useTheme();
	const styles = useStyles<FormArrayFieldStyles>('FormArrayField', props, defaultStyles);

	const [field] = useField<any[]>(props.name);
	const { value = [], name } = field;

	function getFields(index: number) {
		return (props.fields || []).map(f => ({ ...f, name: `${name}[${index}].${f.name}` }));
	}

	const RemoveFields = (remove: (index: number) => void, index: number) => () => {
		return remove(index);
	};

	const PushFields = (push: (o: object) => void) => () => {
		return push({});
	};

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
									onPress={RemoveFields(remove, index)}
								/>
							</View>
						</View>
					))}
					<View style={styles.fieldActions}>
						<Text style={styles.textField}>{label}</Text>
						<Button
							title="Add"
							variant="outlined"
							icon={{ type: 'icon', name: 'plus' }}
							onPress={PushFields(push)}
						/>
					</View>
				</React.Fragment>
			)}
		</FieldArray>
	);
};

FormArrayField.displayName = 'FormArrayField';

FormArrayField.defaultProps = {};
