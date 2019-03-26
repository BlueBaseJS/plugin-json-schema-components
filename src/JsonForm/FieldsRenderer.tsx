import { FormFieldProps } from './Fields';
import React from 'react';
import { getFormField } from './getFormField';

export type renderFieldFn = (field: FormFieldProps, parent: FieldsRendererProps) => React.ReactNode;

export type FieldWrapperProps<T = {}> = {
	field: FormFieldProps;
	parent: any;
	children: React.ReactNode;
} & T;

export type FieldsRendererProps<T = {}> = {
	fields: FormFieldProps[];

	/** Wrap each field in this component */
	FieldWrapper?: React.ComponentType<FieldWrapperProps>;

	/** If children prop if given, internal rendering mechanism will be ignored. */
	children?: (renderField: renderFieldFn) => React.ReactNode
} & T;

/**
 * A component that takes care of field resolution and rendering logic.
 * This component follows the render prop pattern and gives a renderField
 * function as a param.
 */
export class FieldsRenderer extends React.Component<FieldsRendererProps> {

	private fields: {
		[key: string]: React.ComponentType<any>
	} = {};

	constructor(props: FieldsRendererProps) {
		super(props);

    // This binding is necessary to make `this` work in the callback
		this.renderField = this.renderField.bind(this);
	}

	// Before mounting, resolve all components and store them.
	// So we don't end up creating a new component during every render
	componentWillMount() {

		const fields = this.props.fields || [];

		// If field map is already created, skip this op
		// I wonder, if we could do without this check 🤔
		if (Object.keys(this.fields).length > 0) {
			return;
		}

		// Resolve fields
		fields.forEach(field => {
			const type = field.type || '';
			this.fields[type] = getFormField(type);
		});

	}

	render() {

		const { children, fields } = this.props;

		if (children) {
			return children(this.renderField);
		}

		return fields.map(field => this.renderField(field, this.props));
	}

	/**
	 * Render a single field
	 * @param field
	 */
	private renderField(field: FormFieldProps, parent: FieldsRendererProps) {
		const { FieldWrapper } = this.props;
		const Component = this.fields[field.type || ''];
		const fieldNode =  <Component key={field.name} {...field} />;

		return FieldWrapper
		? <FieldWrapper key={field.name} field={field} parent={parent}>{fieldNode}</FieldWrapper>
		: fieldNode;
	}
}