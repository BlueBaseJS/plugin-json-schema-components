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
	rootSpaceBetween: StyleProp<ViewStyle>;
}
export interface FormActionsProps {
	type: 'actions';
	name: string;
	direction: 'left' | 'right' | 'spaceBetween';
	fields: FormFieldProps[];
	style?: StyleProp<ViewStyle>;
	styles?: Partial<FormActionsStyles>;
}

const FieldWrapper = ({ field, children,parent }: FieldWrapperProps) => {

	const { direction, style, styles } = parent;
	console.log("am 1111",style)

	return (
		<View
			key={field.name}
			style={[(direction === 'left' ? styles.fieldContainerLeft : styles.fieldContainerRight)
				, style]} 
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

	const { direction, style, styles: _styles } = props;
	const styles = _styles as FormActionsStyles;
	console.log("am in 222",style)

	return (
		<View style={[styles.root,
			direction === 'left' ? styles.rootLeft : null
			|| direction === 'right' ? styles.rootRight : null
			|| direction === 'spaceBetween' ? styles.rootSpaceBetween : null,
			style]}
			testID="form-actions">
			<FormFields {...props} FieldWrapper={FieldWrapper} />
		</View>
	);
};

FormActions.defaultProps = {
	//direction: 'right'
};

FormActions.defaultStyles = (theme: Theme): FormActionsStyles => ({
	fieldContainerLeft: {
		marginLeft: theme.spacing.unit * 0,
	},
	fieldContainerRight: {
		marginRight: theme.spacing.unit * 0,
	},
	root: {
		flexDirection: 'row',
		//justifyContent: 'flex-start',
		paddingHorizontal: theme.spacing.unit * 2,
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