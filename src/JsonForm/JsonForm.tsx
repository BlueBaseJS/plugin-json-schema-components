import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import { BlueBaseFilter } from '@bluebase/core';
import { FormFieldProps } from './Fields';
import { FormFields } from './FormFields';
import React from 'react';

export interface FormProps<Values = FormikValues> extends FormikConfig<Values> {
	fields: FormFieldProps[];
}

export interface JsonFormProps<Values = FormikValues> {

	/** JSON Schema. */
	schema: FormProps<Values>;

	/** Event name to filter this schema. If this is not provided, the schema is not filtered. */
	filter?: string;

	/** Arguments for the filter. */
	args?: { [key: string]: any };

  /**
   * Used to locate this view in end-to-end tests.
   */
	testID?: string,
}

/**
 * A component that takes a json schema and converts it into a form.
 * @param props
 */
const JsonFormInternal = (props: JsonFormProps) => {

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

/**
 * A component that takes a json schema and converts it into a form.
 * @param props
 */
export const JsonForm = (props: JsonFormProps) => {

	const { args, filter, schema } = props;
	const { fields, ...rest } = schema;

	if (!filter) {
		return <JsonFormInternal schema={schema} {...rest} />;
	}

	return (
		<BlueBaseFilter
			filter={filter}
			value={schema}
			args={args}
		>
		{(filteredSchema: JsonFormProps['schema']) => {
			return <JsonFormInternal schema={filteredSchema} {...rest} />;
		}}
		</BlueBaseFilter>
	);
};
