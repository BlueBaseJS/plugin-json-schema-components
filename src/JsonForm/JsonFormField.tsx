import { BlueBase, BlueBaseContext, Theme } from '@bluebase/core';
import { Field, FieldConfig } from 'formik';
import { StyleProp, ViewStyle } from 'react-native';
import { View, ViewProps } from '@bluebase/components';
import { JsonFormFieldProps } from './JsonFormField';
import React from 'react';

export interface JsonFormFieldStyles {
	root: StyleProp<ViewStyle>;
}
export type JsonFormFieldProps<T = {}> = ViewProps & FieldConfig & T & {
	styles?: Partial<JsonFormFieldStyles>;

	[key: string]: any;
};

export class JsonFormField extends React.Component<JsonFormFieldProps> {

	static contextType = BlueBaseContext;

	private FieldComponent?: React.ComponentType<JsonFormFieldProps>;

	static defaultStyles = (theme: Theme): Partial<JsonFormFieldStyles> => ({
		root: {
			paddingVertical: theme.spacing.unit
		}
	})

	render() {

		const BB: BlueBase = this.context;
		const { style, styles = {}, ...rest } = this.props;

		const FieldComponent = this.getFieldComponent(BB);

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

	private getFieldComponent(BB: BlueBase) {

		const { type } = this.props;

		// We don't want to resolve input field on every render.
		// If we don't do this, a new component is created on every
		// render, making the input field to lose focus.
		if (this.FieldComponent) {
			return this.FieldComponent;
		}

		switch (type) {
			case 'email':
				this.FieldComponent = BB.Components.resolve('EmailInput', 'TextInput', 'Noop');
				break;

			case 'password':
				this.FieldComponent = BB.Components.resolve('PasswordInput', 'TextInput', 'Noop');
				break;

			case 'submit':
				this.FieldComponent = BB.Components.resolve('SubmitInput', 'Button', 'Noop');
				break;

			default:
				this.FieldComponent = BB.Components.resolve('TextInput', 'Noop');
				break;
		}

		return this.FieldComponent;
	}
}