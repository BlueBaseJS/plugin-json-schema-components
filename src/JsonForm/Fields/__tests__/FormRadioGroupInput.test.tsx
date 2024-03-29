import { BlueBaseApp } from '@bluebase/core';
import MaterialUIPlugin from '@bluebase/plugin-material-ui';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import { Formik } from 'formik';
import React from 'react';

import Plugin from '../../../index';
import { FormRadioGroupInput } from '../FormRadioGroupInput';

const fieldProps = {
	label: 'Language',
	name: 'lang',
	type: 'radio-group',

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

describe('FormRadioGroupInput', () => {

	it('should render a radio-group with value "js"', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormRadioGroupInput {...fieldProps as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormRadioGroupInput);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('RadioGroup').last().prop('name')).toBe('lang');
		expect(component.find('RadioGroup').last().prop('value')).toBe('js');
	});

	it('should update radio-group value from onValueChange callback', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormRadioGroupInput {...fieldProps as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormRadioGroupInput);

		// Initial state should be false

		// Check fields
		expect(component.find('RadioGroup').first().prop('name')).toBe('lang');
		expect(component.find('RadioGroup').first().prop('value')).toBe('js');

		// Update State
		const onValueChange: any = component.find('RadioGroup').first().prop('onValueChange');

		onValueChange('java');
		component.update();
		// expect(component).toMatchSnapshot();

		// New state should be true
		expect(component.find('RadioGroup').first().prop('name')).toBe('lang');
		expect(component.find('RadioGroup').first().prop('value')).toBe('java');
	});
});
