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
 * Safely retrieves the value at a nested path within an object.
 *
 * @param obj The object from which to retrieve the value.
 * @param path A dot-notated string representing the path to the value.
 * @returns The value at the specified path, or undefined if the path is not found.
 */
function getNestedValue(obj: any, path: string): any {
	return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

/**
* Determines if a field should be hidden based on the provided display options.
* This function supports both simple and nested object paths in the `values` and `displayOptions`.
*
* @param values An object containing the current values of fields, where keys represent field names.
* Can include nested objects.
* @param displayOptions An optional object containing `hide` and `show` properties, each an object.
* The keys of these objects are strings representing the field name or nested path (dot notation) to check,
* and their values are arrays of values indicating when to hide or show the field.
* @returns A boolean indicating whether the field should be hidden. Returns true if conditions to hide are met,
* false otherwise.
*/
export function isHidden(values: any = {}, displayOptions?: FormFieldDisplayOptions): boolean {
	const hide = displayOptions?.hide;
	const show = displayOptions?.show;

	const checkCondition = (condition: any, key: string): boolean => {
		const valueAtPath = getNestedValue(values, key);
		return condition[key].findIndex((searchValue: any) => valueAtPath === searchValue) > -1;
	};

	if (hide) {
		return Object.keys(hide).every(key => checkCondition(hide, key));
	}

	if (show) {
		return !Object.keys(show).every(key => checkCondition(show, key));
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
