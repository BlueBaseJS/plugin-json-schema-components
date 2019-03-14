import { FormikProps } from 'formik';
import { JsonFormFieldProps } from './JsonFormField';
import React from 'react';

import { JsonFormField } from './JsonFormField';
// import { getComponent } from '@bluebase/components';
// const JsonFormField = getComponent('JsonFormField', 'Noop');

export interface JsonFormContentProps<T = any> extends FormikProps<T> {
	fields: JsonFormFieldProps[];
}
export const JsonFormContent = React.memo((props: JsonFormContentProps ) => {
	const { fields } = props;
	console.log('b')

	return (
		<React.Fragment>
			{fields.map(field => <JsonFormField key={field.name} {...field} />)}
		</React.Fragment>
	);

});