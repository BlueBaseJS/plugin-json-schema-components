import { BlueBaseApp } from '@bluebase/core';
import { FormRangeInput } from '../FormRangeInput';
import { Formik } from 'formik';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const fieldProps = {
	label: 'Temp',
	max: 32,
	min: 16,
	name: 'temp',
	step: 1,
	type: 'range',
};

const initialValues = {
	'temp': 26,
};


describe('FormRangeInput', () => {


	it('should render a slider with value 26', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormRangeInput {...fieldProps as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormRangeInput);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('Slider').last().prop('name')).toBe('temp');
		expect(component.find('Slider').last().prop('value')).toBe(26);
	});

	it('should update slider value from onValueChange callback with null', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormRangeInput {...fieldProps as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormRangeInput);

		// Initial state should be false
		let SliderComponent = component.find('Slider').last();

		// Check fields
		expect(SliderComponent.prop('name')).toBe('temp');
		expect(SliderComponent.prop('value')).toBe(26);

		// Update State
		const onValueChange: any = SliderComponent.prop('onValueChange');

		onValueChange(null);
		component.update();
		// expect(component).toMatchSnapshot();

		// New state should be true
		SliderComponent = component.find('Slider').first();
		expect(SliderComponent.prop('name')).toBe('temp');
		expect(SliderComponent.prop('value')).toBe(null);
	});
	it('should update slider value from onValueChange callback with value', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormRangeInput {...fieldProps as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormRangeInput);

		// Initial state should be false
		let SliderComponent = component.find('Slider').last();

		// Check fields
		expect(SliderComponent.prop('name')).toBe('temp');
		expect(SliderComponent.prop('value')).toBe(26);

		// Update State
		const onValueChange: any = SliderComponent.prop('onValueChange');

		onValueChange(20);
		component.update();
		// expect(component).toMatchSnapshot();

		// New state should be true
		SliderComponent = component.find('Slider').first();
		expect(SliderComponent.prop('name')).toBe('temp');
		expect(SliderComponent.prop('value')).toBe(20);
	});
});
