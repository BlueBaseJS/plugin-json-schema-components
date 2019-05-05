import { Theme, getComponent } from '@bluebase/core';
import { FormStatusListItemProps } from '../FormStatusListItem/FormStatusListItem';
import React from 'react';
import { View } from '@bluebase/components';
import { ViewStyle } from 'react-native';

export interface FormStatusListStyles {
	root: ViewStyle;
	error: ViewStyle;
	warning: ViewStyle;
	success: ViewStyle;
}

export interface FormStatusListProps {
	items: string[];
	divider?: boolean;
	type?: 'error' | 'success' | 'warning';
	styles?: Partial<FormStatusListStyles>;
}

const FormStatusListItem = getComponent<FormStatusListItemProps>('FormStatusListItem');

export const FormStatusList = ({ items = [], styles = {}, type }: FormStatusListProps) => {

	if (!items || items.length < 1) {
		return null;
	}

	let rootStyles = {
		...(styles.root as ViewStyle),
	};

	switch (type) {
		case 'error':
			rootStyles = { ...rootStyles, ...styles.error };
			break;

		case 'warning':
			rootStyles = { ...rootStyles, ...styles.warning };
			break;

		case 'success':
			rootStyles = { ...rootStyles, ...styles.success };
			break;

		default:
			break;
	}

	return (
		<View style={rootStyles}  testID="FormStatusListitem-actions">
			{items.map((error, index) => (
				<FormStatusListItem
					key={index}
					divider={index < items.length - 1}
					type={type}
				>
					{error}
				</FormStatusListItem>
			))}
		</View>
	);
};

FormStatusList.defaultProps = {
	type: 'error'
};

FormStatusList.defaultStyles = (theme: Theme): FormStatusListStyles => ({
	root: {
		borderRadius: theme.shape.borderRadius,
		borderWidth: 1,
		marginHorizontal: theme.spacing.unit * 2,
	},

	error: {
		backgroundColor: '#ffebee',
		borderColor: theme.palette.error.main,
	},

	warning: {
		backgroundColor: '#fff3e0',
		borderColor: theme.palette.warning.dark,
	},

	success: {
		backgroundColor: '#e8f5e9',
		borderColor: theme.palette.success.main,
	},
});