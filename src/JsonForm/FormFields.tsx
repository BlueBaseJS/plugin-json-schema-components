import { FieldResolutionMapType, getFormField } from './getFormField';

import { FormFieldProps } from './Fields';
import { IntlContext } from '@bluebase/core';
import React from 'react';

export type renderFieldFn = (
	field: FormFieldProps,
	index: number,
	parent: FormFieldsProps
) => React.ReactNode;

export type FieldWrapperProps<T = {}> = {
	field: FormFieldProps;
	parent: any;
	children: React.ReactNode;
} & T;

export type FormFieldsProps<T = {}> = {
	fields: FormFieldProps[];

	/** Wrap each field in this component */
	FieldWrapper?: React.ComponentType<FieldWrapperProps>;

	/** If children prop if given, internal rendering mechanism will be ignored. */
	children?: (renderField: renderFieldFn) => React.ReactNode;

	fieldTypes?: FieldResolutionMapType;
} & T;

/**
 * A component that takes care of field resolution and rendering logic.
 * This component follows the render prop pattern and gives a renderField
 * function as a param.
 */
export class FormFields extends React.Component<FormFieldsProps> {
	static contextType = IntlContext;

	private fields: {
		[key: string]: React.ComponentType<any>;
	} = {};

	constructor(props: FormFieldsProps) {
		super(props);

		// This binding is necessary to make `this` work in the callback
		this.renderField = this.renderField.bind(this);
	}

	// Before mounting, resolve all components and store them.
	// So we don't end up creating a new component during every render
	componentWillMount() {
		const fields = this.props.fields || [];

		// // If field map is already created, skip this op
		// // I wonder, if we could do without this check 🤔
		// if (Object.keys(this.fields).length > 0) {
		// 	return;
		// }

		// Resolve fields
		fields.forEach(field => {
			const type = field.type;
			this.fields[type] = getFormField(type, this.props.fieldTypes);
		});
	}

	render() {
		const { children, fields = [] } = this.props;

		if (children) {
			return children(this.renderField);
		}

		return fields.map((field, index) => this.renderField(field, index, this.props));
	}

	/**
	 * Render a single field
	 * @param field
	 */
	private renderField(field: FormFieldProps & any, index: number, parent: FormFieldsProps) {
		const { __ } = this.context;
		const { FieldWrapper, fields, children, fieldTypes, ...rest } = this.props;

		field.name = field.name || `${index}-${field.type}`;

		field = {
			...rest,
			...field,

			// Translate
			helperText: field.helperText ? __(field.helperText) : field.helperText,
			label: field.label ? __(field.label) : field.label,
			placeholder: field.placeholder ? __(field.placeholder) : field.placeholder,
			title: field.title ? __(field.title) : field.title,
		};

		const key = field.name;

		const Component = this.fields[field.type];
		const fieldNode = <Component key={key} {...field} />;

		return FieldWrapper ? (
			<FieldWrapper key={key} field={field} parent={parent}>
				{fieldNode}
			</FieldWrapper>
		) : (
			fieldNode
		);
	}
}
