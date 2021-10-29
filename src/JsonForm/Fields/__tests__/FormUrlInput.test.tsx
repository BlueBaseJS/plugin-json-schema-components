import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import { Formik } from 'formik';
import React from 'react';

import Plugin from '../../../index';
import { FormUrlInput } from '../FormUrlInput';

const fieldProps = {
	label: 'Home Page',
	name: 'home-page',
	required: true,
	type: 'url',
};

const initialValues = {
	'home-page': 'home.page',
};

describe('FormUrlInput', () => {

	it('should render all form fields in the schema', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormUrlInput {...fieldProps as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormUrlInput);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('TextInput').last().prop('name')).toBe('home-page');
		expect(component.find('TextInput').last().prop('value')).toBe('home.page');
		expect(component.find('TextInput').last().prop('type')).toBe('url');
	});
});
