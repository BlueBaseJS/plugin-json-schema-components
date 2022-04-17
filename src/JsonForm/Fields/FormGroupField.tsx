import { Body2, Subtitle1, View } from '@bluebase/components';
import { Theme, useStyles } from '@bluebase/core';
import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

import { FormFields } from '../FormFields';
import { FormFieldProps } from './FormFieldProps';

export interface FormGroupFieldStyles {
	root: ViewStyle;
	titleWrapper: ViewStyle;
	label: TextStyle;
	helperText: TextStyle;
	itemWrapper: ViewStyle;
}

export interface FormGroupFieldProps {
	type: 'group';
	name: string;
	label: string;
	helperText?: string;
	fields: FormFieldProps[];
	style?: ViewStyle;
	styles?: Partial<FormGroupFieldStyles>;
}

const defaultStyles = (theme: Theme): FormGroupFieldStyles => ({
	root: {
		paddingVertical: theme.spacing.unit,
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
});

/**
 * A component that renders form actions, i.e. submit or reset buttons
 * @param props
 */
export const FormGroupField = (props: FormGroupFieldProps) => {
	const { style, label, helperText } = props;
	const styles = useStyles<FormGroupFieldStyles>('FormGroupField', props, defaultStyles);

	return (
		<View style={[styles.root, style]}>
			<View style={styles.titleWrapper}>
				<Subtitle1 style={styles.label}>{label}</Subtitle1>
				{helperText ? <Body2 style={styles.helperText}>{helperText}</Body2> : null}
			</View>

			<View style={styles.itemWrapper}>
				<FormFields {...props} />
			</View>
		</View>
	);
};

FormGroupField.displayName = 'FormGroupField';

FormGroupField.defaultProps = {
};
