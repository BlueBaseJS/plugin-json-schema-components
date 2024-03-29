import { getComponent, Theme, useStyles } from '@bluebase/core';
import { useFormikContext } from 'formik';
import React from 'react';
import { View, ViewStyle } from 'react-native';

import { FormStatusListProps } from '../FormStatusList';

const FormStatusList = getComponent<FormStatusListProps>('FormStatusList');

export interface FormStatusStyles {
	root: ViewStyle;
	error: ViewStyle;
	warning: ViewStyle;
	success: ViewStyle;
}
export interface FormStatusProps {
	[key: string]: any;
	styles?: Partial<FormStatusStyles>;
}

const defaultStyles = (theme: Theme): FormStatusStyles => ({
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

export const FormStatus = (props: FormStatusProps) => {
	const formik = useFormikContext();

	const errors = formik.errors && (formik.errors as any).form;
	const warnings = formik.status && (formik.status as any).warnings;
	const success = formik.status && (formik.status as any).success;

	const styles = useStyles<FormStatusStyles>('FormStatus', props, defaultStyles);
	const statusRootStyles = (type: 'error' | 'success' | 'warning') => {
		const rootStyles = {
			...(styles!.root as ViewStyle),
		};

		switch (type) {
			case 'error':
				return { ...rootStyles, ...styles.error };

			case 'warning':
				return { ...rootStyles, ...styles.warning };

			case 'success':
				return { ...rootStyles, ...styles.success };
		}
	};

	const getFormStatusList = (type: 'error' | 'success' | 'warning', items: string[]) => {
		return !items || !items.length ? null : (
			<View style={statusRootStyles(type)} testID="FormStatusList-view">
				<FormStatusList type={type} items={items} />
			</View>
		);
	};

	return (
		<React.Fragment>
			{getFormStatusList('success', success)}
			{getFormStatusList('warning', warnings)}
			{getFormStatusList('error', errors)}
		</React.Fragment>
	);
};
