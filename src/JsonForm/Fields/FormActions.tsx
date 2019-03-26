import { FieldWrapperProps, FormFields } from '../FormFields';
import { StyleProp, ViewStyle } from 'react-native';
import { FormFieldProps } from './FormFieldProps';
import React from 'react';
import { Theme } from '@bluebase/core';
import { View } from '@bluebase/components';

export interface FormActionsStyles {
	fieldContainerLeft: StyleProp<ViewStyle>;
	fieldContainerRight: StyleProp<ViewStyle>;
	root: StyleProp<ViewStyle>;
	rootLeft: StyleProp<ViewStyle>;
	rootRight: StyleProp<ViewStyle>;
}

export interface FormActionsProps {
	type: 'actions';
	name: string;
	direction: 'left' | 'right';
	fields: FormFieldProps[];
	style?: StyleProp<ViewStyle>;
	styles?: Partial<FormActionsStyles>;
}


const FieldWrapper = ({ field, parent, children }: FieldWrapperProps) => {

	const { direction, styles = {} } = parent;

	return (
		<View
			key={field.name}
			style={direction === 'left' ? styles.fieldContainerLeft : styles.fieldContainerRight}
		>
		{children}
		</View>
	);
};

export const FormActions = (props: FormActionsProps) => {

	const { direction, style = {}, styles = {} } = props;

	return (
		<View style={[styles.root, direction === 'left' ? styles.rootLeft : styles.rootRight, style]}>
			<FormFields {...props} FieldWrapper={FieldWrapper} />
		</View>
	);
};

FormActions.defaultProps = {
	direction: 'right'
};

FormActions.defaultStyles = (theme: Theme): FormActionsStyles => ({
	fieldContainerLeft: {
		marginLeft: theme.spacing.unit,
	},
	fieldContainerRight: {
		marginRight: theme.spacing.unit,
	},
	root: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		paddingVertical: theme.spacing.unit,
	},
	rootLeft: {
		justifyContent: 'flex-start',
	},
	rootRight: {
		justifyContent: 'flex-end',
	}
});