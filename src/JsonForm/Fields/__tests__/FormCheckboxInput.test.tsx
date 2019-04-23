import { BlueBaseApp } from '@bluebase/core';
import { FormCheckboxInput } from '../FormCheckboxInput';
import { Formik } from 'formik';
import Plugin from '../../../index';
import React from 'react';
// import ReactNativePaperPlugin from '@bluebase/plugin-react-native-paper';
import MaterialUIPlugin from '@bluebase/plugin-material-ui';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const fieldProps = {
	label: 'Auto Login',
	name: 'auto-login',
	type: 'checkbox',
	value : false
};

const fieldProps2 = {
	label: 'Auto Login',
	name: 'auto-login',
	type: 'checkbox',
	value : false
};

describe('FormCheckboxInput', () => {


	it('should a checkbox with value true', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={{ 'auto-login': true }} onSubmit={onSubmit}>
					<FormCheckboxInput {...fieldProps as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormCheckboxInput);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('Checkbox').last().prop('name')).toBe('auto-login');
		expect(component.find('Checkbox').last().prop('checked')).toBe(true);
	});


	it('should a checkbox with value false', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={{ 'auto-login': false }} onSubmit={onSubmit}>
					<FormCheckboxInput {...fieldProps as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormCheckboxInput);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('Checkbox').last().prop('name')).toBe('auto-login');
		expect(component.find('Checkbox').last().prop('checked')).toBe(false);
	});



	it('should update checkbox value from onValueChange callback with value false', async () => {

		const onSubmit = jest.fn();
		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={{ 'auto-login': false }} onSubmit={onSubmit}>
					<FormCheckboxInput {...fieldProps as any} onValueChange ={()=>null}/>
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormCheckboxInput);

		// Initial state should be false

		// Check fields
		// expect(component).toMatchSnapshot();
		expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
		expect(component.find('Checkbox').first().prop('checked')).toBe(false);

		// Update State
		const onValueChange: any = component.find('Checkbox').first().prop('onValueChange');

		onValueChange(false, false);
		component.update();
		// expect(component).toMatchSnapshot();

		// New state should be true
		expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
		expect(component.find('Checkbox').first().prop('checked')).toBe(false);
		expect(component.find('Checkbox').last().prop('value')).toBe(false);

	});


	it('should update checkbox value from onValueChange callback with value true ', async () => {

		const onSubmit = jest.fn();
		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={{ 'auto-login': true }} onSubmit={onSubmit}>
					<FormCheckboxInput onValueChange = {()=>null} {...fieldProps2 as any}  />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormCheckboxInput);

		// Initial state should be false

		// Check fields
		// expect(component).toMatchSnapshot();
		expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
		expect(component.find('Checkbox').first().prop('checked')).toBe(true);

		// Update State
		let onValueChange: any = component.find('Checkbox').first().prop('onValueChange');

		

		onValueChange(true, true);
		component.update();
		// expect(component).toMatchSnapshot();

		// New state should be true
		expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
		expect(component.find('Checkbox').first().prop('checked')).toBe(true);
		expect(component.find('Checkbox').last().prop('value')).toBe(false);

	});

	it(' should check with value = false and no call back of onvalue change', async () => {

		const onSubmit = jest.fn();
		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={{ 'auto-login': false }} onSubmit={onSubmit}>
					<FormCheckboxInput  {...fieldProps2 as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormCheckboxInput);

		// Initial state should be false

		// Check fields
		// expect(component).toMatchSnapshot();
		expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
		expect(component.find('Checkbox').first().prop('checked')).toBe(false);

		// Update State
		let onValueChange: any = component.find('Checkbox').first().prop('onValueChange');
		

		onValueChange(null, true);
		component.update();
		// expect(component).toMatchSnapshot();

		// New state should be true
		//state of checked is revered now
		expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
		expect(component.find('Checkbox').first().prop('checked')).toBe(true);
		expect(component.find('Checkbox').last().prop('value')).toBe(false);

	});

});
