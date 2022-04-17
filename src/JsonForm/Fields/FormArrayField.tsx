import { Button, IconButton, Subtitle1, View } from '@bluebase/components';
import { Theme, useStyles, useTheme } from '@bluebase/core';
import { FieldArray, useField } from 'formik';
import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

import { FieldWrapperProps, FormFields } from '../FormFields';
import { FormFieldProps } from './FormFieldProps';

export interface FormArrayFieldStyles {
	root: ViewStyle;
	fieldActions: ViewStyle;
	fieldItemActions: ViewStyle;
	label: TextStyle;
	itemContainer: ViewStyle;
	item: ViewStyle;
}

export interface FormArrayFieldProps {
	type: 'array';
	name: string;
	label: string;
	addButtonLabel?: string;
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
	},

	fieldActions: {
		padding: theme.spacing.unit * 2,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},

	fieldItemActions: {
		justifyContent: 'center',
	},

	label: {
		paddingHorizontal: theme.spacing.unit * 2,
		paddingVertical: theme.spacing.unit,
		color: theme.palette.text.secondary,
	},

	itemContainer: {
		borderColor: theme.palette.divider,
		borderRadius:theme.shape.borderRadius,
		borderWidth: 1,
		marginHorizontal: theme.spacing.unit * 2
	},

	item: {
		flexDirection: 'row',
		padding: theme.spacing.unit,
		borderBottomColor: theme.palette.divider,
		borderBottomWidth: 1,
	},
});

/**
 * A component that renders form actions, i.e. submit or reset buttons
 * @param props
 */
export const FormArrayField = (props: FormArrayFieldProps) => {
	const { style, label, addButtonLabel } = props;
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
				<View style={[styles.root, style]}>
					<Subtitle1 style={styles.label}>{label}</Subtitle1>

					<View style={styles.itemContainer}>
						{value.map((_val, index) => (
							<View key={index} style={styles.item} testID="form-array-item">
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
							<Button
								title={addButtonLabel}
								variant="outlined"
								icon={{ type: 'icon', name: 'plus' }}
								onPress={PushFields(push)}
							/>
						</View>
					</View>
				</View>
			)}
		</FieldArray>
	);
};

FormArrayField.displayName = 'FormArrayField';

FormArrayField.defaultProps = {
	addButtonLabel: 'Add',
};
