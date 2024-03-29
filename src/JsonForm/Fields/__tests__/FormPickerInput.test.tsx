import { Noop } from '@bluebase/components';
import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import { Formik } from 'formik';
import React from 'react';

import Plugin from '../../../index';
import { FormPickerInput } from '../FormPickerInput';

const fieldProps = {
	label: 'Language',
	name: 'lang',
	type: 'picker',

	items: [{
		label: 'JavaScript',
		value: 'js'
	}, {
		label: 'Java',
		value: 'java'
	}]
};

const initialValues = {
	'lang': 'js',
};

describe('FormPickerInput', () => {

	it('should render a picker with value "js"', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]} components={{ Picker: Noop }}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormPickerInput {...fieldProps as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormPickerInput);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('Picker').last().prop('name')).toBe('lang');
		expect(component.find('Picker').last().prop('value')).toBe('js');
	});

	it('should update picker value from onValueChange callback', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]} components={{ Picker: Noop }}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormPickerInput {...fieldProps as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormPickerInput);

		// Initial state should be false
		let PickerComponent = component.find('Picker').last();

		// Check fields
		expect(PickerComponent.prop('name')).toBe('lang');
		expect(PickerComponent.prop('value')).toBe('js');

		// Update State
		const onValueChange: any = PickerComponent.prop('onValueChange');

		onValueChange('java');
		component.update();
		// expect(component).toMatchSnapshot();

		// New state should be true
		PickerComponent = component.find('Picker').first();
		expect(PickerComponent.prop('name')).toBe('lang');
		expect(PickerComponent.prop('value')).toBe('java');
	});
});
