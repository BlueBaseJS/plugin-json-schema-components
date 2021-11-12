import { BlueBaseApp } from '@bluebase/core';
import MaterialUIPlugin from '@bluebase/plugin-material-ui';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import { Formik } from 'formik';
import React from 'react';

import Plugin from '../../../index';
import { FormResetButton } from '../FormResetButton';

const fieldProps = {
	name: 'reset',
	type: 'reset',
};

const initialValues = {
};

describe('FormResetButton', () => {

	it('should render all form fields in the schema', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormResetButton {...fieldProps as any} />
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
