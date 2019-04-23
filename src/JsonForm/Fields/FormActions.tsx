import { FieldWrapperProps, FormFields } from '../FormFields';
import { StyleProp, ViewStyle } from 'react-native';
import { FormFieldProps } from './FormFieldProps';
import React from 'react';
import { Theme } from '@bluebase/core';
import { View } from '@bluebase/components';

export interface FormActionsStyles {
	fieldContainerLeft: StyleProp<ViewStyle>;
	fieldContainerRight: StyleProp<ViewStyle>;
	rootSpaceBetween: StyleProp<ViewStyle>;
	root: StyleProp<ViewStyle>;
	rootLeft: StyleProp<ViewStyle>;
	rootRight: StyleProp<ViewStyle>;
}

export interface FormActionsProps {
	type: 'actions';
	name: string;
	direction: 'left' | 'right' | 'space-between';
	fields: FormFieldProps[];
	style?: StyleProp<ViewStyle>;
	styles?: Partial<FormActionsStyles>;
}


const FieldWrapper = ({ field, parent, children }: FieldWrapperProps) => {

	const { direction, styles, style } = parent;

	return (
		<View
			key={field.name}
			style={direction === 'left' ? styles.fieldContainerLeft : direction === "right" ? styles.fieldContainerRight : style}
		>
			{children}
		</View>
	);
};

/**
 * A component that renders form actions, i.e. submit or reset buttons
 * @param props
 */
export const FormActions = (props: FormActionsProps) => {

	const { direction, styles: _styles } = props;
	const styles = _styles as FormActionsStyles;
	return (

		<View style={[styles.root,direction === 'left' ?styles.rootLeft :direction === 'right' ?styles.rootRight :direction === 'space-between' ?styles.rootSpaceBetween :null
		]}

			testID="form-actions">
			<FormFields {...props} FieldWrapper={FieldWrapper} />
		</View>
	);
};

FormActions.defaultProps = {
	direction: 'right',
};

FormActions.defaultStyles = (theme: Theme): FormActionsStyles => ({
	fieldContainerLeft: {
		marginLeft: theme.spacing.unit * 2,
	},
	fieldContainerRight: {
		marginRight: theme.spacing.unit * 2,
	},
	root: {
		flexDirection: 'row',
		paddingVertical: theme.spacing.unit * 2,
	},
	rootLeft: {
		justifyContent: 'flex-start',

	},
	rootRight: {
		justifyContent: 'flex-end',
	},
	rootSpaceBetween: {
		justifyContent: 'space-between',
	}
});