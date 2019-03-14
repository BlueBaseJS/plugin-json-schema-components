import { BlueBase, BlueBaseContext } from '@bluebase/core';
import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import { JsonFormFieldProps } from './JsonFormField';
import React from 'react';

export interface FormProps<Values = FormikValues> extends FormikConfig<Values> {
	fields: JsonFormFieldProps[];
}

export interface JsonFormProps<Values = FormikValues> {
	schema: FormProps<Values>
}

export class JsonForm extends React.Component<JsonFormProps> {

	static contextType = BlueBaseContext;

	render() {

		const BB: BlueBase = this.context;

		const { schema } = this.props;
		const { fields, ...rest } = schema;

		const JsonFormField = BB.Components.resolve('JsonFormField');

		return (
			<Formik {...rest}>
			{(_formikProps) => {
				return (
					<Form>
						{fields.map(field => <JsonFormField key={field.name} {...field} />)}
					</Form>
				);
			}}
			</Formik>
		);
	}
}