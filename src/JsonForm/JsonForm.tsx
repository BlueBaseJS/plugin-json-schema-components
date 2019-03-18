import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import { JsonFormFieldProps } from './JsonFormField';
import React from 'react';
import { getComponent } from '@bluebase/components';

export interface FormProps<Values = FormikValues> extends FormikConfig<Values> {
	fields: JsonFormFieldProps[];
}

export interface JsonFormProps<Values = FormikValues> {
	schema: FormProps<Values>
}

export class JsonForm extends React.Component<JsonFormProps> {

	render() {

		const { schema } = this.props;
		const { fields, ...rest } = schema;

		const BaseFormField = getComponent('BaseFormField');

		return (
			<Formik {...rest}>
			{(_formikProps) => {
				return (
					<Form>
						{fields.map(field => <BaseFormField key={field.name} {...field} />)}
					</Form>
				);
			}}
			</Formik>
		);
	}
}