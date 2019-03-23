import { FieldsRenderer, renderFieldFn } from '../FieldsRenderer';
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

export const FormActions = ({ direction, fields, style = {}, styles = {} }: FormActionsProps) => (
	<View style={[styles.root, direction === 'left' ? styles.rootLeft : styles.rootRight, style]}>
		<FieldsRenderer fields={fields}>
			{
				(renderField: renderFieldFn) => fields.map(
					field => (
						<View
							key={field.name}
							style={direction === 'left' ? styles.fieldContainerLeft : styles.fieldContainerRight}
						>
						{renderField(field)}
						</View>
					)
				)
			}
		</FieldsRenderer>
	</View>
);

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