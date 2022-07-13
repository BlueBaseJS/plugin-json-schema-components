import { View } from '@bluebase/components';
import { Theme } from '@bluebase/core';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { FieldWrapperProps, FormFields } from '../FormFields';
import { FormFieldProps } from './FormFieldProps';

export interface InlineFieldsStyles {
	fieldContainer: StyleProp<ViewStyle>;
	fieldContainerFill: StyleProp<ViewStyle>;
	root: StyleProp<ViewStyle>;
	rootLeft: StyleProp<ViewStyle>;
	rootRight: StyleProp<ViewStyle>;
}

export interface InlineFieldsProps {
	type: 'actions';
	name: string;
	direction: 'left' | 'right';
	fields: FormFieldProps[];
	style?: StyleProp<ViewStyle>;
	styles?: Partial<InlineFieldsStyles>;
}

const FieldWrapper = ({ field, parent, children }: FieldWrapperProps) => {
	const { direction, styles } = parent;

	return (
		<View
			testID="fieldTest"
			key={field.name}
			style={[styles && styles.fieldContainer, !direction && styles && styles.fieldContainerFill]}
		>
			{children}
		</View>
	);
};

/**
 * A component that renders form actions, i.e. submit or reset buttons
 * @param props
 */
export const InlineFields = (props: InlineFieldsProps) => {
	const { direction, style, styles = {} } = props;

	const stylesheet = [styles.root];

	if (direction === 'left') {
		stylesheet.push(styles.rootLeft);
	} else if (direction === 'right') {
		stylesheet.push(styles.rootRight);
	}

	stylesheet.push(style);

	return (
		<View style={stylesheet} testID="form-actions">
			<FormFields {...props} FieldWrapper={FieldWrapper} />
		</View>
	);
};

InlineFields.displayName = 'InlineFields';

InlineFields.defaultProps = {};

InlineFields.defaultStyles = (theme: Theme): InlineFieldsStyles => ({
	fieldContainer: {
		margin: -theme.spacing.unit,
		// paddingHorizontal: theme.spacing.unit,
		// paddingVertical: theme.spacing.unit / 2,
		justifyContent: 'center'
	},
	fieldContainerFill: {
		flex: 1,
	},
	root: {
		flexDirection: 'row',
		padding: theme.spacing.unit,
	},
	rootLeft: {
		justifyContent: 'flex-start',
	},
	rootRight: {
		justifyContent: 'flex-end',
	},
});
