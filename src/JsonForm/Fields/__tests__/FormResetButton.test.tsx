import { BlueBaseApp } from '@bluebase/core';
import { FormResetButton } from '../FormResetButton';
import { Formik } from 'formik';
import MaterialUIPlugin from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const fieldProps = [{
	name: 'reset',
	type: 'reset',
	nested : true
},
{
	name: 'reset',
	type: 'reset',
	nested : false
},

]

const initialValues = {
};


describe('FormResetButton', () => {


	it('should render all form fields in the schema with nested true', async () => {

		const onSubmit = jest.fn();
		
		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormResetButton {...fieldProps[0] as any} />
				</Formik>
			</BlueBaseApp>
		);
		await waitForElement(component as any, FormResetButton);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('Button').first().prop('title')).toBe('Reset');
		expect(component.find('Button').first().prop('type')).toBe('reset');
	});

	it('should render all form fields in the schema with nested false', async () => {

		const onSubmit = jest.fn();
		
		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormResetButton {...fieldProps[1] as any} />
				</Formik>
			</BlueBaseApp>
		);
		await waitForElement(component as any, FormResetButton);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('Button').first().prop('title')).toBe('Reset');
		expect(component.find('Button').first().prop('type')).toBe('reset');
	});
});
