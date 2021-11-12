import { Button } from '@bluebase/components';
import { BlueBaseApp } from '@bluebase/core';
import MaterialUIPlugin from '@bluebase/plugin-material-ui';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import { Formik } from 'formik';
import React from 'react';

import Plugin from '../../../index';
import { FormSubmitButton } from '../FormSubmitButton';

const fieldProps = {
	name: 'submit',
	title: 'Login',
	type: 'submit',
};

const initialValues = {
};

describe('FormSubmitButton', () => {

	it('should render all form fields in the schema', async () => {

		const onSubmit = jest.fn();

		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormSubmitButton {...fieldProps as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(wrapper, FormSubmitButton);

		// Check fields
		expect(wrapper.find(Button).prop('disabled')).toBe(false);
		expect(wrapper.find(Button).prop('loading')).toBe(false);
		expect(wrapper.find(Button).prop('title')).toBe('Login');
		expect(wrapper.find(Button).prop('type')).toBe('submit');
	});
});
