import '';

import { BlueBaseApp } from '@bluebase/core';
import BluebasePluginMaterialUI from '@bluebase/plugin-material-ui';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import { Formik } from 'formik';
import React from 'react';
import { Text } from 'react-native';

import Plugin from '../../index';
import { FormFields } from '..';
import { FormFieldProps } from '../Fields';
import { FieldWrapperProps, isHidden } from '../FormFields';

const fields: FormFieldProps[] = [{
	helperText: 'please enter username',
	label: 'Username',
	name: 'username',
	testID: 'userInput',
	placeholder: 'enter username',
	required: true,
	title: 'Name',
	type: 'text',
}, {
	schema: { component: 'Text', text: 'Text Component' },
	type: 'component',
}, {
	testID: 'Range',
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
			<BlueBaseApp plugins={[Plugin, BluebasePluginMaterialUI]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormFields fields={fields} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormFields);

		// Check fields
		expect(component.find('FormTextInput[testID="userInput"]').last().prop('name')).toBe('username');
		expect(component.find('FormRangeInput[testID="Range"]').last().prop('name')).toBe('temp');

		expect(component.find('FormFields').children()).toHaveLength(3);
		expect(component.find('FormFields').childAt(0).prop('name')).toBe('username');
		expect(component.find('FormFields').childAt(1).prop('name')).toBe('1-component');
		expect(component.find('FormFields').childAt(2).prop('name')).toBe('temp');
	});

	it('should not render any field if fields property is undefined', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin, BluebasePluginMaterialUI]}>
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
			<BlueBaseApp plugins={[Plugin, BluebasePluginMaterialUI]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormFields fields={fields}>
						{(renderField) => fields.map((f, i) => renderField(f, i, {} as any))}
					</FormFields>
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormFields);

		// expect(component).toMatchSnapshot();

		expect(component.find('FormTextInput[testID="userInput"]').last().prop('name')).toBe('username');
		expect(component.find('FormRangeInput[testID="Range"]').last().prop('name')).toBe('temp');

		// expect(component.find('JsonLayout_Noop').last().prop('name')).toBe('1-component');
		expect(component.find('JsonLayout Text').last().text()).toBe('Text Component');
	});

	it('should wrap fields in FieldWrapper component', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin, BluebasePluginMaterialUI]}>
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

	describe('isHidden', () => {

		const values = {
			foo: 'bar',
			bar: false,
			temp: 26
		};

		it('should return false if there are no displayOptions', () => {
			expect(isHidden(values)).toBe(false);
		});

		it('should return true when hide value matches', () => {
			expect(isHidden(values, { hide: { temp: [26] } })).toBe(true);
		});

		it('should return false when hide value doesnt match', () => {
			expect(isHidden(values, { hide: { temp: [24] } })).toBe(false);
		});

		it('should return true when show value matches', () => {
			expect(isHidden(values, { show: { temp: [26] } })).toBe(false);
		});

		it('should return false when show value doesnt match', () => {
			expect(isHidden(values, { show: { temp: [24] } })).toBe(true);
		});
	});

});
