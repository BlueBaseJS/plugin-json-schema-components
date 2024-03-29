import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import { Formik } from 'formik';
import React from 'react';

import Plugin from '../../../index';
import { FormNumberInput } from '../FormNumberInput';

const fieldProps = {
	label: 'Amount',
	name: 'amount',
	required: true,
	type: 'number',
};

const initialValues = {
	'amount': 126,
};

describe('FormNumberInput', () => {

	it('should render all form fields in the schema', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormNumberInput {...fieldProps as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormNumberInput);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('TextInput').last().prop('name')).toBe('amount');
		expect(component.find('TextInput').last().prop('value')).toBe(126);
		expect(component.find('TextInput').last().prop('type')).toBe('number');
	});
});
