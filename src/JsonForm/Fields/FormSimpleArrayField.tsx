import {
	Body2,
	Button,
	IconButton,
	Subtitle1,
	View
} from '@bluebase/components';
import { Theme, useStyles, useTheme } from '@bluebase/core';
import { FieldArray, useField } from 'formik';
import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

import { FieldWrapperProps, FormFields } from '../FormFields';
import { FormFieldProps } from './FormFieldProps';

export interface FormSimpleArrayFieldStyles {
	root: ViewStyle;
	fieldActions: ViewStyle;
	fieldItemActions: ViewStyle;
	titleWrapper: ViewStyle;
	label: TextStyle;
	helperText: TextStyle;
	itemWrapper: ViewStyle;
	item: ViewStyle;
}

export type FormSimpleArrayFieldProps = FormFieldProps & {
	type: 'simple-array';
	fieldType: FormFieldProps['type'];
	styles?: Partial<FormSimpleArrayFieldStyles>;
};

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

const defaultStyles = (theme: Theme): FormSimpleArrayFieldStyles => ({
	root: {
		paddingVertical: theme.spacing.unit,
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

	titleWrapper: {
		paddingHorizontal: theme.spacing.unit * 2,
		paddingVertical: theme.spacing.unit,
	},

	label: {
		color: theme.palette.text.secondary,
	},

	helperText: {
		...theme.typography.caption,
		color: theme.palette.text.secondary,
		paddingTop: theme.spacing.unit / 2,
	},

	itemWrapper: {
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
export const FormSimpleArrayField = (props: FormSimpleArrayFieldProps) => {
	const { style, label, addButtonLabel, helperText } = props;
	const { theme } = useTheme();
	const styles = useStyles<FormSimpleArrayFieldStyles>('FormSimpleArrayField', props, defaultStyles);

	const [field] = useField<any[]>(props.name);
	const { value = [], name } = field;

	const fields = value.map((_item, index): FormFieldProps => {
		const customField = {
			...props,
			type: props.fieldType,
			name: `${name}[${index}]`,
		};
		return customField;
	});

	const removeFields = (remove: (index: number) => void, index: number) => () => {
		return remove(index);
	};

	const pushFields = (push: (o: object) => void) => () => {
		return push({});
	};

	return (
		<FieldArray name={name}>
			{({ push, remove }) => (
				<View style={[styles.root, style]}>
					<View style={styles.titleWrapper}>
						<Subtitle1 style={styles.label}>{label}</Subtitle1>
						{helperText ? <Body2 style={styles.helperText}>{helperText}</Body2> : null}
					</View>

					<View style={styles.itemWrapper}>
						{value.map((_val, index) => (
							<View key={index} style={styles.item} testID="form-array-item">
								<View style={{ flex: 1 }}>
									<FormFields {...props as any} fields={fields} FieldWrapper={FieldWrapper} />
								</View>
								<View style={styles.fieldItemActions} testID="form-item-actions">
									<IconButton
										name="delete"
										size={theme.spacing.unit * 2}
										onPress={removeFields(remove, index)}
									/>
								</View>
							</View>
						))}
						<View style={styles.fieldActions}>
							<Button
								title={addButtonLabel}
								variant="outlined"
								icon={{ type: 'icon', name: 'plus' }}
								onPress={pushFields(push)}
							/>
						</View>
					</View>
				</View>
			)}
		</FieldArray>
	);
};

FormSimpleArrayField.displayName = 'FormSimpleArrayField';

FormSimpleArrayField.defaultProps = {
	addButtonLabel: 'Add',
};
