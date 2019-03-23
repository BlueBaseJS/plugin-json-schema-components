import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import { FormFieldProps } from './Fields';
import React from 'react';
import { getComponent } from '@bluebase/components';
import { getFormField } from './getFormField';

export interface FormProps<Values = FormikValues> extends FormikConfig<Values> {
	fields: FormFieldProps[];
}

export interface JsonFormProps<Values = FormikValues> {
	schema: FormProps<Values>
}

export class JsonForm extends React.Component<JsonFormProps> {

	private fields: {
		[key: string]: React.ComponentType<any>
	} = {};

	componentWillMount() {

		const { fields } = this.props.schema || [];

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

		const { schema } = this.props;
		const { fields, ...rest } = schema;

		// const BaseFormField = getComponent('BaseFormField');

		return (
			<Formik {...rest}>
			{(_formikProps) => {
				return (
					<Form>
						{fields.map(field => {
							const Component = this.fields[field.type || ''];
							return <Component key={field.name} {...field} />;
						})}
					</Form>
				);
			}}
			</Formik>
		);
	}

	// private renderField(field: JsonFormFieldProps) {
	// 	const Component = this.fields[field.type || ''];
	// 	return <Component key={field.name} {...field} />;
	// }
}