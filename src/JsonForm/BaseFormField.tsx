import { StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { Theme } from '@bluebase/core';
import { View } from '@bluebase/components';

export interface BaseFormFieldStyles {
	leftContainer: StyleProp<ViewStyle>;
	mainContainer: StyleProp<ViewStyle>;
	rightContainer: StyleProp<ViewStyle>;
	root: StyleProp<ViewStyle>;
}

export interface BaseFormFieldProps {
	left?: React.ReactNode;
	right?: React.ReactNode;
	MainComponent?: React.ComponentType<any>;
	styles?: Partial<BaseFormFieldStyles>;

	[key: string]: any;
}

export class BaseFormField extends React.Component<BaseFormFieldProps> {

	static defaultProps: Partial<BaseFormFieldProps> = {};

	static defaultStyles = (theme: Theme): BaseFormFieldStyles => ({
		leftContainer: {},
		mainContainer: {
			flex: 1,
		},
		rightContainer: {},
		root: {
			paddingVertical: theme.spacing.unit
		}
	})

	render() {

		const { MainComponent, children, left, right, styles = {}, ...props } = this.props;

		return (
			<View style={styles.root}>
				{left && <View style={styles.leftContainer}>{left}</View>}
				{MainComponent &&
					<View style={styles.mainContainer}>
						<MainComponent {...props}>
							{children}
						</MainComponent>
					</View>
				}
				{right && <View style={styles.rightContainer}>{right}</View>}
			</View>
		);
	}
}
