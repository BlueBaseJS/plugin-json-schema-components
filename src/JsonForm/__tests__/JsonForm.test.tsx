import { BlueBaseApp } from '@bluebase/core';
import { FormFieldProps } from '../Fields';
import { JsonForm } from '../JsonForm';
import Plugin from '../../index';
import React from 'react';
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


describe('FormFields', () => {


	it('should render all form fields in the schema', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<JsonForm schema={{ fields, initialValues, onSubmit }} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, JsonForm);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('FormFields').children()).toHaveLength(3);
		expect(component.find('FormFields').childAt(0).prop('name')).toBe('username');
		expect(component.find('FormFields').childAt(1).prop('name')).toBe('1-component');
		expect(component.find('FormFields').childAt(2).prop('name')).toBe('temp');
	});


	it('should hook into the form to modify the schema', async () => {

		const onSubmit = jest.fn();

		const filter = (schema: any) => {

			schema.fields.push({
				schema: { component: 'Text', text: 'New Injected Text Component' },
				type: 'component',
			});

			return schema;
		};

		const component = mount(
			<BlueBaseApp plugins={[Plugin]} filters={{ 'pluggable-form': filter }}>
				<JsonForm schema={{ fields, initialValues, onSubmit }} style={{}}  filter="pluggable-form" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, JsonForm);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('FormFields').children()).toHaveLength(4);
		expect(component.find('FormFields').childAt(0).prop('name')).toBe('username');
		expect(component.find('FormFields').childAt(1).prop('name')).toBe('1-component');
		expect(component.find('FormFields').childAt(2).prop('name')).toBe('temp');
		expect(component.find('FormFields').childAt(3).prop('name')).toBe('3-component');
	});



		it('should hook into the form to modify the schema with title', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]} >
				<JsonForm schema={{ fields, initialValues, onSubmit ,title : 'Testing'}} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, JsonForm);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('FormFields').children()).toHaveLength(4);
		expect(component.find('FormFields').childAt(0).prop('name')).toBe('username');
		expect(component.find('FormFields').childAt(1).prop('name')).toBe('1-component');
		expect(component.find('FormFields').childAt(2).prop('name')).toBe('temp');
		expect(component.find('FormFields').childAt(3).prop('name')).toBe('3-component');
	});

	it('should hook into the form to modify the schema with description', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]} >
				<JsonForm schema={{ fields, initialValues, onSubmit ,description : 'Description is here'}} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, JsonForm);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('FormFields').children()).toHaveLength(4);
		expect(component.find('FormFields').childAt(0).prop('name')).toBe('username');
		expect(component.find('FormFields').childAt(1).prop('name')).toBe('1-component');
		expect(component.find('FormFields').childAt(2).prop('name')).toBe('temp');
		expect(component.find('FormFields').childAt(3).prop('name')).toBe('3-component');
	});

});
