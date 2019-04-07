import { BlueBaseApp } from '@bluebase/core';
import { FormEmailInput } from '../FormEmailInput';
import { Formik } from 'formik';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const fieldProps = {
	label: 'Email',
	name: 'email',
	required: true,
	type: 'email',
};

const initialValues = {
	'email': 'foo@bar.com',
};


describe('FormEmailInput', () => {


	it('should render all form fields in the schema', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormEmailInput {...fieldProps as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormEmailInput);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('TextInput').last().prop('name')).toBe('email');
		expect(component.find('TextInput').last().prop('value')).toBe('foo@bar.com');
		expect(component.find('TextInput').last().prop('type')).toBe('email');
	});
});
