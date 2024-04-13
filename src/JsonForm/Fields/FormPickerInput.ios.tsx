import {
	Caption,
	Icon,
	PickerItemProps,
	PickerProps,
	Subtitle1,
	View
} from '@bluebase/components';
import { Theme, useStyles } from '@bluebase/core';
import { useField } from 'formik';
import React, { useCallback } from 'react';
import { ActionSheetIOS, Pressable, TextStyle, ViewStyle } from 'react-native';

export interface BaseFormFieldStyles {
	leftContainer: ViewStyle;
	mainContainer: ViewStyle;
	rightContainer: ViewStyle;
	root: ViewStyle;
	labelRow: ViewStyle;
	label: TextStyle;
	valueRow: ViewStyle;
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
		paddingHorizontal: theme.spacing.unit * 2,
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
		flexDirection: 'row',
		paddingBottom: theme.spacing.unit,
	},

	label: {
		color: theme.palette.text.secondary,
		flex: 1,
	},

	valueRow: {
		borderBottomColor: theme.palette.divider,
		borderBottomWidth: 1,
		flexDirection: 'row',
		paddingBottom: theme.spacing.unit,
		// justifyContent: 'space-between',
	},

	value: {
		color: theme.palette.text.secondary,
		flexGrow: 1,
	},

	chevron: {
		color: theme.palette.text.secondary,
	},

	helperTextRow: {
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
	const styles = useStyles('BaseFormField', props, defaultStyles);

	const [field, meta, helpers] = useField(props.name);
	const { setValue } = helpers;

	// const inputProps: any = {
	// 	...props,
	// 	...field,
	// 	onValueChange: setValue,
	// 	onChange: undefined,
	// 	selectedValue: field.value,
	// };

	const onPress = useCallback(() => {
		ActionSheetIOS.showActionSheetWithOptions(
			{
				options: [...items.map(i => i.label ?? i.value), 'Cancel'],
				cancelButtonIndex: items.length,
			},
			buttonIndex => {
				if (buttonIndex === items.length) {
					return;
				};

				setValue(items[buttonIndex].value);
			},
		);
	}, []);

	const labelText = required ? `${label} *` : label;
	const valueText = items.find(i => i.value === field.value)?.label;

	return (
		<View style={styles.root} testID="base-form-field">
			{left && <View style={styles.leftContainer} testID="base-form-field-left">{left}</View>}
			<View style={styles.mainContainer} testID="base-form-field-main">
				<Pressable onPress={onPress}>
					{/* Label */}
					{label && valueText ? (
						<View style={styles.labelRow} testID="slider-label">
							<Caption testID="label" style={styles.label}>
								{labelText}
							</Caption>
						</View>
					) : null}

					{/* Value */}
					<View style={styles.valueRow} testID="slider-label">
						<Subtitle1 testID="label" style={styles.value}>
							{valueText ?? labelText ?? 'Select'}
						</Subtitle1>
						<Icon name="chevron-down" style={styles.chevron} />
					</View>
				</Pressable>

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
