import { BlueBaseApp } from '@bluebase/core';
import { FormSubmitButton } from '../FormSubmitButton';
import { Formik } from 'formik';
import MaterialUIPlugin from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

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

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormSubmitButton {...fieldProps as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormSubmitButton);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('Button').first().prop('disabled')).toBe(false);
		expect(component.find('Button').first().prop('loading')).toBe(false);
		expect(component.find('Button').first().prop('title')).toBe('Login');
		expect(component.find('Button').first().prop('type')).toBe('submit');

		const onPress: any = component.find('Button').first().prop('onPress');
		onPress();
		// component.update();


		// const formik: any = component.find('Button').first().prop('formik');
		// formik.handleSubmit();
		// component.update();

		setTimeout(() => {
			// expect(component).toMatchSnapshot();
			expect(onSubmit).toHaveBeenCalledTimes(1);
		});

	});
});
