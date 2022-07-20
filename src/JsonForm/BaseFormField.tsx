import { View } from '@bluebase/components';
import { Theme, useStyles } from '@bluebase/core';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface BaseFormFieldStyles {
	leftContainer: StyleProp<ViewStyle>;
	mainContainer: StyleProp<ViewStyle>;
	rightContainer: StyleProp<ViewStyle>;
	root: StyleProp<ViewStyle>;
}

export interface BaseFormFieldProps {
	[key: string]: any;
	left?: React.ReactNode;
	right?: React.ReactNode;
	MainComponent?: React.ComponentType<any>;
	styles?: Partial<BaseFormFieldStyles>;
	fieldProps?: any;
}

const defaultStyles = (theme: Theme): BaseFormFieldStyles => ({
	leftContainer: {
		paddingRight: theme.spacing.unit * 2,
	},
	mainContainer: {
		flex: 1,
	},
	rightContainer: {
		paddingLeft: theme.spacing.unit * 2,
	},
	root: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingHorizontal: theme.spacing.unit * 2,
		paddingVertical: theme.spacing.unit * 2,
	}
});

export const BaseFormField = (props: BaseFormFieldProps) => {
	const { MainComponent, children, left, right, styles: _styles, fieldProps, ...rest } = props;
	const styles = useStyles('BaseFormField', props, defaultStyles);

	return (
		<View style={styles.root} testID="base-form-field">
			{left && <View style={styles.leftContainer} testID="base-form-field-left">{left}</View>}
			{MainComponent &&
				<View style={styles.mainContainer} testID="base-form-field-main">
					<MainComponent {...rest} {...fieldProps}>
						{children}
					</MainComponent>
				</View>
			}
			{right && <View style={styles.rightContainer} testID="base-form-field-right">{right}</View>}
		</View>
	);
};
