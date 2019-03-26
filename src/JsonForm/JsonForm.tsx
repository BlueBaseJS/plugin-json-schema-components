import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import { FormFieldProps } from './Fields';
import { FormFields } from './FormFields';
import React from 'react';

export interface FormProps<Values = FormikValues> extends FormikConfig<Values> {
	fields: FormFieldProps[];
}

export interface JsonFormProps<Values = FormikValues> {
	schema: FormProps<Values>
}

/**
 * A component that takes a json schema and converts it into a form.
 * @param props
 */
export const JsonForm = (props: JsonFormProps) => {

	const { schema } = props;
	const { fields, ...rest } = schema;


	return (
		<Formik {...rest}>
		{(_formikProps) => {
			return (
				<Form>
					<FormFields fields={fields} />
				</Form>
			);
		}}
		</Formik>
	);
};
