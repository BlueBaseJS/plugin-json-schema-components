import { StyleProp, ViewStyle } from 'react-native';
import { 
	View, 
	getComponent, 
} from '@bluebase/components';
import React from 'react';
// import { TextInput } from 'react-native';
import { Theme } from '@bluebase/core';
import { Field } from 'formik';

// const View = getComponent('View');

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


// TODO: Add better typing, consider filter this map
// const fieldResolutionMap: any = {
// 	default: ['TextInput', 'Noop'],
// 	email: ['EmailInput', 'TextInput', 'Noop'],
// 	password: ['PasswordInput', 'TextInput', 'Noop'],
// 	submit: ['SubmitInput', 'Button', 'Noop'],
// };

const MainComponent = getComponent('TextInput');


export const BaseFormField = (props: BaseFormFieldProps) => {

	const { left, right, styles = {}, ...rest } = props;
	// const type = props.type;

	// const MainComponent = (type && fieldResolutionMap[type])
	// 	? getComponent(...fieldResolutionMap[type])
	// 	: getComponent(...fieldResolutionMap.default);


	// const MainComponent = TextInput;

	return (
		<Field {...rest}>
		{({ field /* _form */ }: any) => (<View style={styles.mainContainer}><MainComponent {...field} /></View>)}
		</Field>
	);
	// return (
	// 	<View style={styles.root}>
	// 		{left && <View style={styles.leftContainer}>{left}</View>}
	// 		{MainComponent && <View style={styles.mainContainer}><MainComponent {...rest} /></View>}
	// 		{right && <View style={styles.rightContainer}>{right}</View>}
	// 	</View>
	// );
	// return (
	// 	<View style={styles.root}>
	// 		{left && <View style={styles.leftContainer}>{left}</View>}
	// 		{MainComponent &&
	// 			<View style={styles.mainContainer}>
	// 				<Field {...rest}>
	// 				{({ field /* _form */ }: any) => (<MainComponent {...field} {...rest} />)}
	// 				</Field>
	// 			</View>
	// 		}
	// 		{right && <View style={styles.rightContainer}>{right}</View>}
	// 	</View>
	// );
};

BaseFormField.defaultStyles = (theme: Theme): BaseFormFieldStyles => ({
	leftContainer: {},
	mainContainer: {
		flex: 1,
	},
	rightContainer: {},
	root: {
		paddingVertical: theme.spacing.unit
	}
});

BaseFormField.defaultProps = {
	// MainComponent: getComponent('TextInput'),
	// MainComponent: TextInput,
};