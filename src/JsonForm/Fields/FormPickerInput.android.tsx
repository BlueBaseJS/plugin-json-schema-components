import {
	Body2,
	Caption,
	Divider,
	Picker,
	PickerItemProps,
	PickerProps,
	View
} from '@bluebase/components';
import { Theme, useStyles } from '@bluebase/core';
import { useField } from 'formik';
import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

export interface BaseFormFieldStyles {
	leftContainer: ViewStyle;
	mainContainer: ViewStyle;
	rightContainer: ViewStyle;
	root: ViewStyle;
	labelRow: ViewStyle;
	label: TextStyle;
	valueRow: ViewStyle;
	valueDivider: ViewStyle;
	value: TextStyle;
	chevron: TextStyle;
	helperTextRow: ViewStyle;
	helperText: TextStyle;
	errorText: TextStyle;
}

export interface FormPickerInputProps extends PickerProps {
	type: 'picker',
	name: string,
	items: PickerItemProps[],
	left?: React.ReactNode;
	right?: React.ReactNode;
	styles?: Partial<BaseFormFieldStyles>;
}

const defaultStyles = (theme: Theme): BaseFormFieldStyles => ({
	root: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingVertical: theme.spacing.unit * 2,
	},
	leftContainer: {
		paddingRight: theme.spacing.unit * 2,
	},
	mainContainer: {
		flex: 1,
	},
	rightContainer: {
		paddingLeft: theme.spacing.unit * 2,
	},

	labelRow: {
		paddingHorizontal: theme.spacing.unit * 2,
		flexDirection: 'row',
		paddingBottom: theme.spacing.unit,
	},

	label: {
		color: theme.palette.text.secondary,
		flex: 1,
	},

	valueRow: {
		// paddingHorizontal: theme.spacing.unit * 2,
		// borderBottomColor: theme.palette.divider,
		// borderBottomWidth: 1,
	},

	valueDivider: {
		marginHorizontal: theme.spacing.unit * 2,
	},

	value: {
		color: theme.palette.text.secondary,
		flexGrow: 1,
	},

	chevron: {
		color: theme.palette.text.secondary,
	},

	helperTextRow: {
		paddingHorizontal: theme.spacing.unit * 2,
		paddingTop: theme.spacing.unit,
	},

	helperText: {
		color: theme.palette.text.secondary,
	},

	errorText: {
		color: theme.palette.error.main,
	},
});

export const FormPickerInput = ({ type, items, ...props }: FormPickerInputProps) => {
	const { left, right, label, helperText, required } = props;
	const styles = useStyles('FormPickerInput', props, defaultStyles);

	const [field, meta, helpers] = useField(props.name);
	const { setValue } = helpers;

	const inputProps: any = {
		...props,
		...field,
		onValueChange: setValue,
		onBlur: undefined,
		onChange: undefined,
		selectedValue: field.value,
	};

	const labelText = required ? `${label} *` : label;

	return (
		<View style={styles.root} testID="base-form-field">
			{left && <View style={styles.leftContainer} testID="base-form-field-left">{left}</View>}
			<View style={styles.mainContainer} testID="base-form-field-main">
				{/* Label */}
				{label ? (
					<View style={styles.labelRow} testID="slider-label">
						<Body2 testID="label" style={styles.label}>
							{labelText}
						</Body2>
					</View>
				) : null}

				{/* Value */}
				<View style={styles.valueRow} testID="slider-label">
					<Picker {...inputProps}>
						{items.map(i => <Picker.Item key={String(i.value)} {...i} />)}
					</Picker>
					<Divider style={styles.valueDivider} />
				</View>

				{/* Helper Text */}
				{helperText ? (
					<View style={[styles.helperTextRow]} testID="slider-helper-text">
						<Caption
							style={[styles.helperText, meta.error ? styles.errorText : undefined]}
						>
							{helperText}
						</Caption>
					</View>
				) : null}
			</View>
			{right && <View style={styles.rightContainer} testID="base-form-field-right">{right}</View>}
		</View>
	);
};

FormPickerInput.defaultProps = {
};
