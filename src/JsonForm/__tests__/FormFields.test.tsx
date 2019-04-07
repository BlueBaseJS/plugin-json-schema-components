import { BlueBaseApp } from '@bluebase/core';
import { FieldWrapperProps } from '../FormFields';
import { FormFieldProps } from '../Fields';
import { FormFields } from '..';
import { Formik } from 'formik';
import Plugin from '../../index';
import React from 'react';
import { Text } from 'react-native';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const fields: FormFieldProps[] = [{
	label: 'Username',
	name: 'username',
	required: true,
	type: 'text',
}, {
	schema: { component: 'Text', text: 'Text Component' },
	type: 'component',
}, {
	label: 'Temp',
	max: 32,
	min: 16,
	name: 'temp',
	step: 1,
	type: 'range',
}];

const initialValues = {
	// 'auto-login': true,
	// lang: 'js',
	// password: '',
	// remember: true,
	temp: 26,
	username: '',
};

const FieldWrapper = (props: FieldWrapperProps) => (
	<Text>{props.field.type}</Text>
);


describe('FormFields', () => {


	it('should render all form fields in the schema', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormFields fields={fields} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormFields);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('FormTextInput_TextInput_Noop').last().prop('name')).toBe('username');
		expect(component.find('FormRangeInput_FormTextInput_TextInput_Noop').last().prop('name')).toBe('temp');
		expect(component.find('JsonLayout_Noop Text').last().text()).toBe('Text Component');

		expect(component.find('FormFields').children()).toHaveLength(3);
		expect(component.find('FormFields').childAt(0).prop('name')).toBe('username');
		expect(component.find('FormFields').childAt(1).prop('name')).toBe('1-component');
		expect(component.find('FormFields').childAt(2).prop('name')).toBe('temp');
	});

	it('should not render any field if fields property is undefined', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormFields fields={undefined as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormFields);

		// expect(component).toMatchSnapshot();

		expect(component.find('FormFields').last().children()).toHaveLength(0);
	});

	it('should render custom children, if children prop is provided', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormFields fields={fields}>
					{(renderField) => fields.map((f, i) => renderField(f, i, {} as any))}
					</FormFields>
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormFields);

		// expect(component).toMatchSnapshot();

		expect(component.find('FormTextInput_TextInput_Noop').last().prop('name')).toBe('username');
		expect(component.find('FormRangeInput_FormTextInput_TextInput_Noop').last().prop('name')).toBe('temp');

		// expect(component.find('JsonLayout_Noop').last().prop('name')).toBe('1-component');
		expect(component.find('JsonLayout_Noop Text').last().text()).toBe('Text Component');
	});


	it('should wrap fields in FieldWrapper component', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormFields fields={fields} FieldWrapper={FieldWrapper} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormFields);

		// expect(component).toMatchSnapshot();

		expect(component.find('FieldWrapper').at(0).text()).toBe('text');
		expect(component.find('FieldWrapper').at(1).text()).toBe('component');
		expect(component.find('FieldWrapper').at(2).text()).toBe('range');
	});



});
