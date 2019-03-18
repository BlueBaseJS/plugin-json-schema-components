import { BlueBaseContext, Theme } from '@bluebase/core';
import { Field, FieldConfig } from 'formik';
import { StyleProp, ViewStyle, TextInput } from 'react-native';
import { View, ViewProps } from '@bluebase/components';
import { JsonFormFieldProps } from './JsonFormField';
import React from 'react';
// import { getComponent } from '../getComponent';

export interface JsonFormFieldStyles {
	root: StyleProp<ViewStyle>;
}
export type JsonFormFieldProps<T = {}> = ViewProps & FieldConfig & T & {
	styles?: Partial<JsonFormFieldStyles>;

	[key: string]: any;
};

// // TODO: Add better typing, consider filter this map
// const fieldResolutionMap: any = {
// 	default: ['TextInput', 'Noop'],
// 	email: ['EmailInput', 'TextInput', 'Noop'],
// 	password: ['PasswordInput', 'TextInput', 'Noop'],
// 	submit: ['SubmitInput', 'Button', 'Noop'],
// };

export class JsonFormField extends React.Component<JsonFormFieldProps> {

	static contextType = BlueBaseContext;

	// private FieldComponent?: React.ComponentType<JsonFormFieldProps>;

	static defaultStyles = (theme: Theme): Partial<JsonFormFieldStyles> => ({
		root: {
			paddingVertical: theme.spacing.unit
		}
	})

	render() {

		// const BB: BlueBase = this.context;
		const { style, styles = {}, ...rest } = this.props;

		// const type = this.props.type;

		// if (!this.FieldComponent) {
		// 	this.FieldComponent = (type && fieldResolutionMap[type])
		// 	? getComponent(...fieldResolutionMap[type])
		// 	: getComponent(...fieldResolutionMap.default);
		// }

		// const FieldComponent = this.FieldComponent;
		const FieldComponent = TextInput;

		return (
			<Field {...rest}>
			{({ field /* _form */ }: any) => (
				<View style={[styles.root, style]}>
					<FieldComponent {...field} {...rest} />
				</View>
			)}
			</Field>
		);
	}

	// private getFieldComponent(_BB: BlueBase) {

	// 	const { type } = this.props;

	// 	// We don't want to resolve input field on every render.
	// 	// If we don't do this, a new component is created on every
	// 	// render, making the input field to lose focus.
	// 	if (this.FieldComponent) {
	// 		return this.FieldComponent;
	// 	}

	// 	this.FieldComponent = (type && fieldResolutionMap[type])
	// 	? getComponent(...fieldResolutionMap[type])
	// 	: getComponent(...fieldResolutionMap.default);

	// 	return this.FieldComponent;
	// }
}