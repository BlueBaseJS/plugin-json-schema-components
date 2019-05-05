import { BlueBaseFilter, Body2, H6, View } from '@bluebase/components';
import { Formik, FormikConfig, FormikValues } from 'formik';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Form } from './Form';
import { FormFieldProps } from './Fields';
import { FormFields } from './FormFields';
import React from 'react';
import { Theme } from '@bluebase/core';

export interface FormProps<Values = FormikValues> extends FormikConfig<Values> {
	fields: FormFieldProps[];
}

export type JsonFormSchema<Values = FormikValues> = FormProps<Values> & {

	/** Form title */
	title?: string;

	/** Form description */
	description?: string;
};

export interface JsonFormStyles {
	root: StyleProp<ViewStyle>;
	header: StyleProp<TextStyle>;
	title: StyleProp<TextStyle>;
	titlePadding: StyleProp<TextStyle>;
	description: StyleProp<TextStyle>;
}
export interface JsonFormProps<Values = FormikValues> {

	/** JSON Schema. */
	schema: JsonFormSchema<Values>;

	/** Event name to filter this schema. If this is not provided, the schema is not filtered. */
	filter?: string;

	/** Arguments for the filter. */
	args?: { [key: string]: any };

	/** Root view styles */
	style?: StyleProp<ViewStyle>;

	styles?: Partial<JsonFormStyles>;

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
			<Form>
				<FormFields fields={fields} />
			</Form>
		</Formik>
	);
};

/**
 * A component that takes a json schema and converts it into a form.
 * @param props
 */
export const JsonForm = (props: JsonFormProps) => {

	const { args, filter, schema, style, styles = {} } = props;
	const { description, fields, title, ...rest } = schema;

	let node = <JsonFormInternal schema={schema} {...rest} />;

	if (filter) {
		node = (
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
	}

	let header = null;

	if (title || description) {
		header = (
			<View style={styles.header}>
			{
				title
				? <H6 style={[styles.title, !!description && styles.titlePadding]}>{title}</H6>
				: null
			}
			{
				description
				? <Body2 style={styles.description}>{description}</Body2>
				: null
			}
			</View>
		);
	}

	return (
		<View style={[styles.root, style]}>
			{header}{node}
		</View>
	);
};

JsonForm.defaultStyles = (theme: Theme) => ({

	root: {
	},

	header: {
		padding: theme.spacing.unit * 2,
	},

	title: {},

	titlePadding: {
		paddingBottom: theme.spacing.unit,
	},

	description: {
		color: theme.palette.text.disabled,
	},
});