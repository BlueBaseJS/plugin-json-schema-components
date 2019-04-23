import { BlueBaseApp } from '@bluebase/core';
import { FormSwitchInput } from '../FormSwitchInput';
import { Formik  } from 'formik';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const fieldProps = [{
	label: 'Auto Login',
	name: 'muzamil',
	type: 'switch',
	value : false,
},
{
	label: 'Auto Login',
	name: 'auto-login',
	type: 'switch',
	value : true,
}];

describe('FormSwitchInput', () => {


	it('should a switch with value true', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={{ 'auto-login': true}} onSubmit={onSubmit} >

					<FormSwitchInput {...fieldProps[0] as any} />
					
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormSwitchInput);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('Switch').last().prop('name')).toBe('muzamil');
		expect(component.find('Switch').last().prop('checked')).toBe(false);
		expect(component.find('Switch').last().prop('value')).toBe(false);
	});


	it('should a switch with value false', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={{ 'auto-login': false  }} onSubmit={onSubmit}>
					<FormSwitchInput {...fieldProps[1] as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormSwitchInput);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('Switch').last().prop('name')).toBe('auto-login');
		expect(component.find('Switch').last().prop('checked')).toBe(false);
		expect(component.find('Switch').last().prop('value')).toBe(true);

	});


	it('should update switch value from onValueChange callback with value true', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>p
				<Formik initialValues={{ 'auto-login': true }} onSubmit={onSubmit}>
					<FormSwitchInput onValueChange = {()=>null} {...fieldProps[0] as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormSwitchInput);

		// Initial state should be false
		let SwitchComponent = component.find('Switch').last();

		// Check fields
		expect(SwitchComponent.prop('name')).toBe('muzamil');
		expect(SwitchComponent.prop('checked')).toBe(false);

		// Update State
		const onValueChange: any = SwitchComponent.prop('onValueChange');

		onValueChange(true, true);
		component.update();
		// expect(component).toMatchSnapshot();

		// New state should be true
		SwitchComponent = component.find('Switch').first();
		expect(SwitchComponent.prop('name')).toBe('muzamil');
		expect(SwitchComponent.prop('checked')).toBe(true);
		expect(SwitchComponent.prop('value')).toBe(false);

	});

	it('should update switch value from onValueChange callback with value false', async () => {
		const onSubmit = jest.fn();
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={{ 'auto-login': false }} onSubmit={onSubmit}>
					<FormSwitchInput onValueChange = {()=>null} {...fieldProps[1] as any}  />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormSwitchInput);

		// Initial state should be false
		let SwitchComponent = component.find('Switch').last();

		// Check fields
		expect(SwitchComponent.prop('name')).toBe('auto-login');
		expect(SwitchComponent.prop('checked')).toBe(false);

		// Update State
		const onValueChange: any = SwitchComponent.prop('onValueChange');

		onValueChange(false, false);
		component.update();
		// expect(component).toMatchSnapshot();

		// New state should be true
		SwitchComponent = component.find('Switch').first();
		expect(SwitchComponent.prop('name')).toBe('auto-login');
		expect(SwitchComponent.prop('checked')).toBe(false);
		expect(SwitchComponent.prop('value')).toBe(true);
	});
	
	it('should update switch value from onValueChange without onValueChange prop', async () => {
		const onSubmit = jest.fn();
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={{ 'auto-login': false }} onSubmit={onSubmit}>
					<FormSwitchInput  {...fieldProps[1] as any}  />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormSwitchInput);

		// Initial state should be false
		let SwitchComponent = component.find('Switch').last();

		// Check fields
		expect(SwitchComponent.prop('name')).toBe('auto-login');
		expect(SwitchComponent.prop('checked')).toBe(false);

		// Update State
		const onValueChange: any = SwitchComponent.prop('onValueChange');

		onValueChange(false, false);
		component.update();
		// expect(component).toMatchSnapshot();

		// New state should be true
		SwitchComponent = component.find('Switch').first();
		expect(SwitchComponent.prop('name')).toBe('auto-login');
		expect(SwitchComponent.prop('checked')).toBe(false);
		expect(SwitchComponent.prop('value')).toBe(true);
	});
});
