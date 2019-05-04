import { StyleProp, ViewStyle } from 'react-native';
import { Theme, getComponent } from '@bluebase/core';
import { ErrorListItemProps } from '../ErrorListItem/ErrorListItem';
import React from 'react';
import { View } from '@bluebase/components';

export interface ErrorListStyles {
	root: StyleProp<ViewStyle>;
}

export interface ErrorListProps {
	errors: string[];
	divider?: boolean;
	styles?: Partial<ErrorListStyles>;
}

const ErrorListItem = getComponent<ErrorListItemProps>('ErrorListItem');

export const ErrorList = ({ errors = [], styles = {} }: ErrorListProps) => {

	if (!errors || errors.length < 1) {
		return null;
	}

	return (
		<View style={styles.root}>
			{errors.map((error, index) => (
				<ErrorListItem
					key={index}
					divider={index < errors.length - 1}
				>
					{error}
				</ErrorListItem>
			))}
		</View>
	);
};

ErrorList.defaultStyles = (theme: Theme): ErrorListStyles => ({
	root: {
		backgroundColor: '#ffebee',
		borderColor: theme.palette.error.main,
		borderRadius: theme.shape.borderRadius,
		borderWidth: 1,
		marginHorizontal: theme.spacing.unit * 2,
	},
});