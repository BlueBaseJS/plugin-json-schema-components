import { Divider } from '@bluebase/components';
import { useBlueBase, useIntl } from '@bluebase/core';
import { useFormikContext } from 'formik';
import React, { useCallback } from 'react';

import { FormFieldDisplayOptions, FormFieldProps } from './Fields';
import { FieldResolutionMapType, getFormField } from './getFormField';

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

	dividers?: boolean;
} & T;

/**
 * Determines if a field should be hidden based on the displayOptions
 * @param values
 * @param displayOptions
 */
export function isHidden(values: any = {}, displayOptions?: FormFieldDisplayOptions) {

	const hide = displayOptions?.hide;
	const show = displayOptions?.show;

	if (hide) {
		return Object
			// for each key
			.keys(hide)
			// Find index to value, if found
			.map(key => hide[key].findIndex(searchValue => values[key] === searchValue))
			// Return true if all are greater than -1
			.every(index => index > -1);
	}

	if (show) {
		return !Object
			// for each key
			.keys(show)
			// Find index to value, if found
			.map(key => show[key].findIndex(searchValue => values[key] === searchValue))
			// Return true if all are greater than -1
			.every(index => index > -1);
	}

	return false;
}

/**
 * A component that takes care of field resolution and rendering logic.
 * This component follows the render prop pattern and gives a renderField
 * function as a param.
 */
export const FormFields: React.FunctionComponent<FormFieldsProps> = (props: FormFieldsProps) => {
	const { FieldWrapper, children, fields = [], fieldTypes, dividers, ...rest } = props;

	const BB = useBlueBase();
	const { __ } = useIntl();
	const { values } = useFormikContext();

	const renderField = useCallback((fieldInput: FormFieldProps, index: number) => {

		const { displayOptions, ...fieldOpts } = fieldInput;

		const field: FormFieldProps = {
			...rest,
			...fieldInput,

			name: fieldInput.name || `${index}-${fieldInput.type}`,

			// Translate
			helperText: fieldInput.helperText ? __(fieldOpts.helperText) : fieldOpts.helperText,
			label: fieldOpts.label ? __(fieldOpts.label) : fieldOpts.label,
			placeholder: fieldOpts.placeholder ? __(fieldOpts.placeholder) : fieldOpts.placeholder,
			title: fieldOpts.title ? __(fieldOpts.title) : fieldOpts.title,
		};

		const key = field.name;

		const Component = BB.Components.resolveFromCache(...getFormField(field.type, fieldTypes));
		Component.displayName = `FormFields.${field.type}`;
		const fieldNode = <Component key={key} {...field} fieldTypes={fieldTypes} />;

		if (isHidden(values, field.displayOptions)) {
			return null;
		}

		const node = FieldWrapper ? (
			<FieldWrapper key={key} field={field} parent={props}>
				{fieldNode}
			</FieldWrapper>
		) : (
			fieldNode
		);

		if (dividers && fields.length > 0 && index < fields.length - 1) {
			return [node, <Divider key={`${key}-divider`} />];
		}

		return node;
	}, [props, fieldTypes, values, dividers, FieldWrapper]);

	if (children) {
		return children(renderField);
	}

	return fields.map(renderField) as any;
};

FormFields.displayName = 'FormFields';
