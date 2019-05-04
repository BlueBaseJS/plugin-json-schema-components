import { Body2, Icon, View } from '@bluebase/components';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import React from 'react';
import { Theme } from '@bluebase/core';

export interface ErrorListItemStyles {
	root: StyleProp<ViewStyle>;
	divider: StyleProp<ViewStyle>;
	icon: StyleProp<TextStyle>;
	text: StyleProp<TextStyle>;
}

export interface ErrorListItemProps {
	children: string;
	divider?: boolean;
	styles?: Partial<ErrorListItemStyles>;
}

export const ErrorListItem = ({ children, divider, styles = {} }: ErrorListItemProps) => (
	<View style={[styles.root, divider && styles.divider]}>
		<Body2 style={styles.icon}><Icon name="alert" size={16} /></Body2>
		<Body2 style={styles.text}>{children}</Body2>
	</View>
);

ErrorListItem.defaultStyles = (theme: Theme): ErrorListItemStyles => ({
	root: {
		// backgroundColor: '#ffebee',
		flexDirection: 'row',
		padding: theme.spacing.unit,
	},

	divider: {
		borderBottomColor: theme.palette.error.main,
		borderBottomWidth: 1,
	},

	icon: {
		color: theme.palette.error.main,
		paddingHorizontal: theme.spacing.unit,
	},

	text: {
		color: theme.palette.error.main,
		flexShrink: 1,
		paddingHorizontal: theme.spacing.unit,
	}
});