import { BlueBaseApp } from '@bluebase/core';
import { FormPasswordInput } from '../FormPasswordInput';
import { Formik } from 'formik';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const fieldProps = {
	label: 'Password',
	name: 'password',
	required: true,
	type: 'password',
};

const initialValues = {
	'password': 'secret',
};


describe('FormPasswordInput', () => {


	it('should render all form fields in the schema', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormPasswordInput {...fieldProps as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormPasswordInput);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('TextInput').last().prop('name')).toBe('password');
		expect(component.find('TextInput').last().prop('value')).toBe('secret');
		expect(component.find('TextInput').last().prop('type')).toBe('password');
		expect(component.find('TextInput').last().prop('secureTextEntry')).toBe(true);
	});
});
