import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import { JsonFormFieldProps } from './JsonFormField';
import React from 'react';
import { getComponent } from '@bluebase/components';

export interface FormProps<Values = FormikValues> extends FormikConfig<Values> {
	fields: JsonFormFieldProps[];
}

export interface JsonFormProps<Values = FormikValues> {
	schema: FormProps<Values>
}

const DefaultInputs = ['FormTextInput', 'TextInput', 'Noop'];
const DefaultButtons = ['Button', 'Noop'];

const FieldResolutionMap: any = {
	color: ['FormColorInput', ...DefaultInputs],
	date: ['FormDateInput', ...DefaultInputs],
	email: ['FormEmailInput', ...DefaultInputs],
	number: ['FormNumberInput', ...DefaultInputs],
	password: ['FormPasswordInput', ...DefaultInputs],
	range: ['FormRangeInput', ...DefaultInputs],
	reset: ['FormResetButton', ...DefaultButtons],
	search: ['FormSearchInput', ...DefaultInputs],
	submit: ['FormSubmitButton', ...DefaultButtons],
	tel: ['FormTelInput', ...DefaultInputs],
	time: ['FormTimeInput', ...DefaultInputs],
	url: ['FormUrlInput', ...DefaultInputs],
};

export class JsonForm extends React.Component<JsonFormProps> {

	private fields: {
		[key: string]: React.ComponentType<any>
	} = {};

	componentWillMount() {

		const { fields } = this.props.schema || [];

		// Resolve MainComponent

		if (Object.keys(this.fields).length > 0) {
			return;
		}

		fields.forEach(field => {

			const type = field.type || '';

			this.fields[type] = (type && FieldResolutionMap[type])
				? getComponent(...FieldResolutionMap[type])
				: getComponent(...DefaultInputs);
		});

	}

	render() {

		const { schema } = this.props;
		const { fields, ...rest } = schema;

		// const BaseFormField = getComponent('BaseFormField');

		return (
			<Formik {...rest}>
			{(_formikProps) => {
				return (
					<Form>
						{fields.map(field => {
							const Component = this.fields[field.type || ''];
							return <Component key={field.name} {...field} />;
						})}
					</Form>
				);
			}}
			</Formik>
		);
	}

	// private renderField(field: JsonFormFieldProps) {
	// 	const Component = this.fields[field.type || ''];
	// 	return <Component key={field.name} {...field} />;
	// }
}