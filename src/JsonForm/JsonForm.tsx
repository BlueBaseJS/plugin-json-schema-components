import {
	BlueBaseFilter,
	Body2,
	FormattedMessage,
	H6,
	View
} from '@bluebase/components';
import { Theme, useStyles } from '@bluebase/core';
import { Formik, FormikConfig, FormikContextType, FormikValues } from 'formik';
import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { FormFieldProps } from './Fields';
import { Form } from './Form';
import { FormFields } from './FormFields';
import FormikEffect from './FormikEffect';
import { FieldResolutionMapType } from './getFormField';

export interface FormProps<Values extends FormikValues> extends FormikConfig<Values> {
	fields: FormFieldProps[];
}

export type JsonFormSchema<Values extends FormikValues> = FormProps<Values> & {
	/** Form title */
	title?: string;

	/** Form description */
	description?: string;

	/** Event handler called when values are updated */
	onChange?: (
		current: FormikContextType<Values>,
		prev: FormikContextType<Values>,
		...props: any[]
	) => void;

	/** Maps type field to React/BlueBase components. Use this to define custom fields. */
	fieldTypes?: FieldResolutionMapType;
};

export interface JsonFormStyles {
	root: StyleProp<ViewStyle>;
	header: StyleProp<TextStyle>;
	title: StyleProp<TextStyle>;
	titlePadding: StyleProp<TextStyle>;
	description: StyleProp<TextStyle>;
}
export interface JsonFormProps<Values extends FormikValues> {
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
const JsonFormInternal = <Values extends FormikValues>(props: JsonFormProps<Values>) => {
	const { schema } = props;
	const { fields, fieldTypes, ...rest } = schema;

	return (
		<Formik {...rest}>
			<React.Fragment>
				{schema.onChange ? <FormikEffect onChange={schema.onChange} /> : null}
				<Form style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
					<FormFields fields={fields} fieldTypes={fieldTypes} />
				</Form>
			</React.Fragment>
		</Formik>
	);
};

const defaultStyles = (theme: Theme) => ({
	root: {
		flexGrow: 1,
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

/**
 * A component that takes a json schema and converts it into a form.
 * @param props
 */
export const JsonForm = <Values extends FormikValues>(props: JsonFormProps<Values>) => {
	const { args, filter, schema, style } = props;
	const { description, fields, title, ...rest } = schema;
	const styles = useStyles('JsonForm', props, defaultStyles);

	let node = <JsonFormInternal schema={schema} {...rest} />;

	if (filter) {
		node = (
			<BlueBaseFilter filter={filter} value={schema} args={args}>
				{(filteredSchema: JsonFormProps<Values>['schema']) => {
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
