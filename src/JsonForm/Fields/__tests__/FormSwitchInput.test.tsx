import { BlueBaseApp } from '@bluebase/core';
import BlueBasePluginMaterialUI from "@bluebase/plugin-material-ui";
import { FormSwitchInput } from '../FormSwitchInput';
import { Formik } from 'formik';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
const fieldProps = {
	label: 'Auto Login',
	name: 'auto-login',
	type: 'switch',
};

// const initialValues = {
// 	'auto-login': true,
// };


describe('FormSwitchInput', () => {


	it('should a switch with value true', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin, BlueBasePluginMaterialUI]}>
				<Formik initialValues={{ 'auto-login': true }} onSubmit={onSubmit}>
					<FormSwitchInput {...fieldProps as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormSwitchInput);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('Switch').last().prop('name')).toBe('auto-login');
		expect(component.find('Switch').last().prop('checked')).toBe(true);
	});


	it('should a switch with value false', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={{ 'auto-login': false }} onSubmit={onSubmit}>
					<FormSwitchInput {...fieldProps as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormSwitchInput);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('Switch').last().prop('name')).toBe('auto-login');
		expect(component.find('Switch').last().prop('checked')).toBe(false);
	});


	it('should update switch value from onValueChange callback', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={{ 'auto-login': false }} onSubmit={onSubmit}>
					<FormSwitchInput {...fieldProps as any} />
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

		onValueChange(null, true);
		component.update();
		// expect(component).toMatchSnapshot();

		// New state should be true
		SwitchComponent = component.find('Switch').first();
		expect(SwitchComponent.prop('name')).toBe('auto-login');
		expect(SwitchComponent.prop('checked')).toBe(true);
	});
});
