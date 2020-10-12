import { FieldResolutionMapType, getFormField } from './getFormField';

import { FormFieldProps } from './Fields';
import React from 'react';
import { useIntl } from '@bluebase/core';

export type renderFieldFn = (
	field: FormFieldProps,
	index: number,
	parent: FormFieldsProps
) => React.ReactNode;

export type FieldWrapperProps<T = {}> = {
	field: FormFieldProps;
	parent: any;
	children: React.ReactNode;
} & T;

export type FormFieldsProps<T = {}> = {
	fields: FormFieldProps[];

	/** Wrap each field in this component */
	FieldWrapper?: React.ComponentType<FieldWrapperProps>;

	/** If children prop if given, internal rendering mechanism will be ignored. */
	children?: (renderField: renderFieldFn) => React.ReactNode;

	fieldTypes?: FieldResolutionMapType;
} & T;

/**
 * A component that takes care of field resolution and rendering logic.
 * This component follows the render prop pattern and gives a renderField
 * function as a param.
 */
export const FormFields: React.FunctionComponent<FormFieldsProps> = (props: FormFieldsProps) => {
	const { FieldWrapper, children, fields = [] , fieldTypes, ...rest } = props;
	const { __ } = useIntl();

	const renderField = (field: FormFieldProps & any, index: number) => {
		field.name = field.name || `${index}-${field.type}`;

		field = {
			...rest,
			...field,

			// Translate
			helperText: field.helperText ? __(field.helperText) : field.helperText,
			label: field.label ? __(field.label) : field.label,
			placeholder: field.placeholder ? __(field.placeholder) : field.placeholder,
			title: field.title ? __(field.title) : field.title,
		};

		const key = field.name;

		const Component = getFormField(field.type, fieldTypes);
		const fieldNode = <Component key={key} {...field} />;

		return FieldWrapper ? (
			<FieldWrapper key={key} field={field} parent={props}>
				{fieldNode}
			</FieldWrapper>
		) : (
			fieldNode
		);
	};

	if (children) {
		return children(renderField);
	}

	return fields.map(renderField) as any;
};

FormFields.displayName = 'FormFields';
