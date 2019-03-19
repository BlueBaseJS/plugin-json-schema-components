import { StyleProp, ViewStyle } from 'react-native';
import { View, getComponent } from '@bluebase/components';
import React from 'react';
import { Theme } from '@bluebase/core';

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

const DefaultInputs = ['FormTextInput', 'TextInput', 'Noop'];
const DefaultButtons = ['Button', 'Noop'];

const fieldResolutionMap: any = {
	color: ['FormColorInput', ...DefaultInputs],
	date: ['FormDateInput', ...DefaultInputs],
	email: ['FormEmailInput', ...DefaultInputs],
	number: ['FormNumberInput', ...DefaultInputs],
	password: ['FormPasswordInput', ...DefaultInputs],
	range: ['FormRangeInput', ...DefaultInputs],
	reset: ['FormResetButton', ...DefaultButtons],
	search: ['FormSearchInput', ...DefaultInputs],
	submit: ['FormSubmitButton', ...DefaultButtons],
	tel: ['FormTelInput', ...DefaultInputs],
	time: ['FormTimeInput', ...DefaultInputs],
	url: ['FormUrlInput', ...DefaultInputs],
};

export class BaseFormField extends React.Component<BaseFormFieldProps> {

	static defaultProps: Partial<BaseFormFieldProps> = {};

	private MainComponent?: React.ComponentType<any>;

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

	componentWillMount() {
		// Resolve MainComponent
		const type = this.props.type;
		if (!this.MainComponent) {
			this.MainComponent = (type && fieldResolutionMap[type])
			? getComponent(...fieldResolutionMap[type])
			: getComponent(...DefaultInputs);
		}
	}

	render() {

		const { children, left, right, styles = {}, ...props } = this.props;

		const MainComponent = this.MainComponent;

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
