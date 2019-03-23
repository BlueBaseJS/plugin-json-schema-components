import { FormFieldProps } from './Fields';
import React from 'react';
import { getFormField } from './getFormField';

export type renderFieldFn = (field: FormFieldProps) => React.ReactNode;

export interface FieldsRendererProps {
	fields: FormFieldProps[];
	children: (renderField: renderFieldFn) => React.ReactNode
}

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
		return this.props.children(this.renderField);
	}

	/**
	 * Render a single field
	 * @param field
	 */
	private renderField(field: FormFieldProps) {
		const Component = this.fields[field.type || ''];
		return <Component key={field.name} {...field} />;
	}
}