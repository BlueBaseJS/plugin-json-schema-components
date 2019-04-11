import { StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import { Theme } from '@bluebase/core';
import { View } from '@bluebase/components';

export interface BaseFormFieldStyles {
	leftContainer: StyleProp<ViewStyle>;
	mainContainer: StyleProp<ViewStyle>;
	rightContainer: StyleProp<ViewStyle>;
	root: StyleProp<ViewStyle>;
	style ?: StyleProp<ViewStyle>;
}

export interface BaseFormFieldProps {
	left?: React.ReactNode;
	right?: React.ReactNode;
	MainComponent?: React.ComponentType<any>;
	styles?: Partial<BaseFormFieldStyles>;

	[key: string]: any;
}

export class BaseFormField extends React.PureComponent<BaseFormFieldProps> {

	static defaultProps: Partial<BaseFormFieldProps> = {};

	static defaultStyles = (theme: Theme): BaseFormFieldStyles => ({
		leftContainer: {
			paddingRight: theme.spacing.unit * 2,
		},
		mainContainer: {
			flex: 1,
			//borderWidth :1,
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
	})

	render() {

		const { MainComponent,style, children, left, right, styles: _styles, ...props } = this.props;
		const styles = _styles as BaseFormFieldStyles;
		console.log(this.props);

		return (
			<View style={styles.root} testID="base-form-field">
				{left && <View style={styles.leftContainer} testID="base-form-field-left">{left}</View>}
				{
					MainComponent &&
					<View style={[styles.mainContainer, style]} testID="base-form-field-main" >
						<MainComponent {...props} >
							{children}
						</MainComponent>
					</View>
				}
				{right && <View style={styles.rightContainer} testID="base-form-field-right">{right}</View>}
			</View>
		);
	}
}
