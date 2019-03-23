import { FieldsRenderer, renderFieldFn } from './FieldsRenderer';
import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import { FormFieldProps } from './Fields';
import React from 'react';

export interface FormProps<Values = FormikValues> extends FormikConfig<Values> {
	fields: FormFieldProps[];
}

export interface JsonFormProps<Values = FormikValues> {
	schema: FormProps<Values>
}


export const JsonForm = (props: JsonFormProps) => {

	const { schema } = props;
	const { fields, ...rest } = schema;


	return (
		<Formik {...rest}>
		{(_formikProps) => {
			return (
				<Form>
					<FieldsRenderer fields={fields}>
						{(renderField: renderFieldFn) => fields.map(renderField)}
					</FieldsRenderer>
				</Form>
			);
		}}
		</Formik>
	);
}


{/* <FieldsRenderer>
{(renderField) => }
</FieldsRenderer> */}