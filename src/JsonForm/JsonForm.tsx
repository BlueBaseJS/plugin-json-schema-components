import { BlueBaseFilter, Body2, FormattedMessage, H6, View } from '@bluebase/components';
import { Formik, FormikConfig, FormikContext, FormikValues } from 'formik';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { Form } from './Form';
import { FormFieldProps } from './Fields';
import { FormFields } from './FormFields';
import FormikEffect from './FormikEffect';
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

	/** Event handler called when values are updated */
	onChange?: (current: FormikContext<Values>, prev: FormikContext<Values>, ...props: any[]) => void;
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
	testID?: string;
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
			<React.Fragment>
				{schema.onChange ? <FormikEffect onChange={schema.onChange} /> : null}
				<Form style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
					<FormFields fields={fields} />
				</Form>
			</React.Fragment>
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
			<BlueBaseFilter filter={filter} value={schema} args={args}>
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
				{title ? (
					<FormattedMessage
						component={H6}
						style={[styles.title, !!description && styles.titlePadding]}
					>
						{title}
					</FormattedMessage>
				) : null}
				{description ? (
					<FormattedMessage component={Body2} style={styles.description}>
						{description}
					</FormattedMessage>
				) : null}
			</View>
		);
	}

	return (
		<View style={[styles.root, style]}>
			{header}
			{node}
		</View>
	);
};

JsonForm.defaultStyles = (theme: Theme) => ({
	root: {
		flex: 1,
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
