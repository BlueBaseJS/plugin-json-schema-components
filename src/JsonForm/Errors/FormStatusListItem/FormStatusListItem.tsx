import { Body2, FormattedMessage, Icon, View } from '@bluebase/components';
import { TextStyle, ViewStyle } from 'react-native';
import React from 'react';
import { Theme } from '@bluebase/core';

export interface FormStatusListItemStyles {
	root: ViewStyle;
	divider: ViewStyle;
	icon: TextStyle;
	text: TextStyle;
	dividerError: ViewStyle;
	iconError: TextStyle;
	textError: TextStyle;
	dividerSuccess: ViewStyle;
	iconSuccess: TextStyle;
	textSuccess: TextStyle;
	dividerWarning: ViewStyle;
	iconWarning: TextStyle;
	textWarning: TextStyle;
}

export interface FormStatusListItemProps {
	children: string;
	divider?: boolean;
	type?: 'error' | 'success' | 'warning';
	styles?: Partial<FormStatusListItemStyles>;
}

export const FormStatusListItem = ({ children, divider, styles = {}, type }: FormStatusListItemProps) => {


	let iconName = '';
	let iconStyles = styles.icon as ViewStyle;
	let textStyles = styles.text as ViewStyle;

	let rootStyles = {
		...(styles.root as ViewStyle),
		...(divider && styles.divider as ViewStyle)
	};

	switch (type) {
		case 'error':
			iconName = 'alert-circle';
			iconStyles = { ...iconStyles, ...styles.iconError };
			textStyles = { ...textStyles, ...styles.textError };
			rootStyles = { ...rootStyles, ...styles.dividerError };

			break;

		case 'warning':
			iconName = 'alert';
			iconStyles = { ...iconStyles, ...styles.iconWarning };
			textStyles = { ...textStyles, ...styles.textWarning };
			rootStyles = { ...rootStyles, ...styles.dividerWarning };

			break;

		case 'success':
			iconName = 'check';
			iconStyles = { ...iconStyles, ...styles.iconSuccess };
			textStyles = { ...textStyles, ...styles.textSuccess };
			rootStyles = { ...rootStyles, ...styles.dividerSuccess };

			break;

		default:
			break;
	}

	return (
		<View
			style={rootStyles}
			testID="FormStatusListitem-View"
		>
			<Body2 style={iconStyles}><Icon name={iconName} size={16} /></Body2>
			<FormattedMessage component={Body2} style={textStyles}>
				{children}
			</FormattedMessage>
		</View>
	);
};

FormStatusListItem.defaultProps = {
	type: 'error'
};

FormStatusListItem.defaultStyles = (theme: Theme): FormStatusListItemStyles => ({
	root: {
		flexDirection: 'row',
		padding: theme.spacing.unit,
	},

	divider: {
		borderBottomWidth: 1,
	},

	icon: {
		paddingHorizontal: theme.spacing.unit,
	},

	text: {
		flexShrink: 1,
		paddingHorizontal: theme.spacing.unit,
	},

	dividerError: { borderBottomColor: theme.palette.error.main },
	iconError: { color: theme.palette.error.main },
	textError: { color: theme.palette.error.main },

	dividerSuccess: { borderBottomColor: theme.palette.success.main },
	iconSuccess: { color: theme.palette.success.main },
	textSuccess: { color: theme.palette.success.main },

	dividerWarning: { borderBottomColor: theme.palette.warning.dark },
	iconWarning: { color: theme.palette.warning.dark },
	textWarning: { color: theme.palette.warning.dark },
});