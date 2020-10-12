import { BlueBaseApp , createPlugin } from '@bluebase/core';
import { FormCheckboxInput } from '../FormCheckboxInput';
import { Formik } from 'formik';
import MaterialUIPlugin from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';

import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const fieldProps = {
	label: 'Auto Login',
	name: 'auto-login',
	type: 'checkbox',
};

// const initialValues = {
// 	'auto-login': true,
// };

export const Checkbox: any = () => 'Checkbox';

export const SamplePlugins = createPlugin({
	description: 'testing',
	key: 'sample',
	name: 'sample',
	version: 'test',

	ThingThingholderImage: { uri: 'https://placeimg.com/300/300/arch' },


	components: {
		Checkbox
	}

});
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


	it('should update checkbox value from onValueChange callback', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin, SamplePlugins]}>
				<Formik initialValues={{ 'auto-login': false }} onSubmit={onSubmit}>
					<FormCheckboxInput {...fieldProps as any} />
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

		onValueChange(null, true);
		component.update();
		// expect(component).toMatchSnapshot();

		// New state should be true
		expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
		expect(component.find('Checkbox').first().prop('checked')).toBe(true);
	});
});
