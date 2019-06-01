import { BlueBaseApp } from '@bluebase/core';
import { FormFieldProps } from '../Fields';
import { FormikContext } from 'formik';
import { JsonForm } from '../JsonForm';
import Plugin from '../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const fields: FormFieldProps[] = [
	{
		label: 'Username',
		name: 'username',
		required: true,
		type: 'text',
	},
	{
		schema: { component: 'Text', text: 'Text Component' },
		type: 'component',
	},
	{
		label: 'Temp',
		max: 32,
		min: 16,
		name: 'temp',
		step: 1,
		type: 'range',
	},
];

describe('FormikEffect', () => {
	it('should not render FormikEffect component if there is no onChange prop', async () => {
		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<JsonForm schema={{ fields, initialValues: {}, onSubmit }} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, JsonForm);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('FormikEffect')).toHaveLength(0);
	});

	it('should render FormikEffect component if there is onChange prop', async () => {
		const onSubmit = jest.fn();
		const onChange = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<JsonForm schema={{ fields, initialValues: {}, onSubmit, onChange }} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, JsonForm);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('FormikEffect')).toHaveLength(1);
	});

	it('should render execute onChange callback when values change', async () => {
		const onSubmit = jest.fn();
		const onChange = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<JsonForm schema={{ fields, initialValues: {}, onSubmit, onChange }} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, JsonForm);

		const formik: FormikContext<any> = component
			.find('FormikEffect')
			.first()
			.prop('formik');

		// Change values, should trigger callback
		formik.setValues({ username: 'foo' });

		// Check fields
		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange.mock.calls[0][0].values).toMatchObject({ username: 'foo' });
		expect(onChange.mock.calls[0][1].values).toMatchObject({});

		// Keep values same, should not trigger callback
		formik.setValues({ username: 'foo' });

		// Check fields
		expect(onChange).toHaveBeenCalledTimes(1);
	});
});
