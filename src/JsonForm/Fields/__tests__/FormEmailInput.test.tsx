import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import { Formik } from 'formik';
import React from 'react';

import Plugin from '../../../index';
import { FormEmailInput } from '../FormEmailInput';

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
