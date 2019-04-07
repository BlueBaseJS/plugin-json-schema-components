import { BlueBaseApp } from '@bluebase/core';
import { FormTextInput } from '../FormTextInput';
import { Formik } from 'formik';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const fieldProps = [{
	label: 'Username',
	name: 'username',
	required: true,
	type: 'text',
}, {
	label: 'Email',
	name: 'email',
	required: true,
	type: 'email',
}];

const initialValues = {
	username: 'foo',
};


describe('FormTextInput', () => {


	it('should render all form fields in the schema', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormTextInput {...fieldProps[0]} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormTextInput);

		// expect(component).toMatchSnapshot();

		// Check fields
		expect(component.find('TextInput').last().prop('name')).toBe('username');
		expect(component.find('TextInput').last().prop('value')).toBe('foo');
		expect(component.find('TextInput').last().prop('type')).toBe('text');
	});


	it('should validate required fields', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormTextInput {...fieldProps[0]} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormTextInput);

		// expect(component).toMatchSnapshot();

		const validate: any = component.find('FieldInner[name="username"]').last().prop('validate');

		// Check fields
		expect(validate('')).toBe('This field is required');
		expect(validate('foo')).toBeUndefined();
	});


	it('should validate email fields', async () => {

		const onSubmit = jest.fn();

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormTextInput {...fieldProps[1]} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormTextInput);

		// expect(component).toMatchSnapshot();

		const validate: any = component.find('FieldInner[name="email"]').last().prop('validate');

		// Check fields
		expect(validate('foo bar')).toBe('Please enter a valid email address');
		expect(validate('foo@bar.com')).toBeUndefined();
	});
});
