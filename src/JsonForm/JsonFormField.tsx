import { BlueBase, BlueBaseContext } from '@bluebase/core';
import { Field, FieldAttributes } from 'formik';
import { JsonFormFieldProps } from './JsonFormField';
import React from 'react';
import { View } from 'react-native';

export type JsonFormFieldProps<T = {}> = FieldAttributes<T>;

export class JsonFormField extends React.Component<JsonFormFieldProps> {

	static contextType = BlueBaseContext;

	private FieldComponent?: React.ComponentType<JsonFormFieldProps>;

	render() {

		const BB: BlueBase = this.context;

		// // We don't want to resolve input field on every render.
		// // If we don't do this, a new component is created on every
		// // render, making the input field to lose focus.
		// if (!this.FieldComponent) {
		// 	this.FieldComponent = BB.Components.resolve('TextInput');
		// }

		const FieldComponent = this.getFieldComponent(BB);

		return (
			<Field {...this.props}>
			{({ field /* _form */ }: any) => (
				<View>
					<FieldComponent {...field}  />
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