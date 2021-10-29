import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import { Formik } from 'formik';
import React from 'react';

import Plugin from '../../../';
import { FormSubmitButton } from '../FormSubmitButton';
import { FormTextInput, validateFormTextInput } from '../FormTextInput';

const fieldProps = [
	{
		helperText: 'This is a helper text',
		label: 'Username',
		name: 'username',
		required: true,
		type: 'text',
	},
	{
		label: 'Email',
		name: 'email',
		required: true,
		type: 'email',
	},
];

const initialValues = {
	username: 'foo',
};

describe('FormTextInput', () => {

	it('should render all form fields in the schema', async () => {
		const onSubmit = jest.fn();

		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormTextInput {...fieldProps[0]} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(wrapper as any, Formik);

		// expect(wrapper.find(Formik)).toMatchSnapshot();

		// Check fields
		expect(
			wrapper
				.find('TextInput')
				.last()
				.prop('name')
		).toBe('username');
		expect(
			wrapper
				.find('TextInput')
				.last()
				.prop('value')
		).toBe('foo');
		expect(
			wrapper
				.find('TextInput')
				.last()
				.prop('type')
		).toBe('text');
	});

	it('should validate required fields', async () => {
		// Check fields
		expect(validateFormTextInput({ required: true } as any)('')).toBe('This field is required');
		expect(validateFormTextInput({ required: true } as any)('foo')).toBeUndefined();
	});

	it('should validate email fields', async () => {
		// Check fields
		expect(validateFormTextInput({ type: 'email' } as any)('foo bar')).toBe(
			'Please enter a valid email address'
		);
		expect(validateFormTextInput({ type: 'email' } as any)('foo@bar.com')).toBeUndefined();
	});

	it('should update field value when onChangeText callback is invoked', async () => {
		const onSubmit = jest.fn();

		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={{}} onSubmit={onSubmit}>
					<FormTextInput {...fieldProps[0]} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(wrapper as any, FormTextInput);

		// expect(wrapper).toMatchSnapshot();

		// Check fields
		expect(
			wrapper
				.find('TextInput')
				.last()
				.prop('name')
		).toBe('username');
		expect(
			wrapper
				.find('TextInput')
				.last()
				.prop('value')
		).toBeUndefined();
		expect(
			wrapper
				.find('TextInput')
				.last()
				.prop('type')
		).toBe('text');
		expect(
			wrapper
				.find('TextInput')
				.last()
				.prop('helperText')
		).toBe('This is a helper text');

		const onChangeText: any = wrapper
			.find('TextInput')
			.first()
			.prop('onChangeText');

		onChangeText('bar');
		wrapper.update();

		// let any pending callbacks in PromiseJobs run
		await Promise.resolve();

		setTimeout(() => {
			// expect(wrapper).toMatchSnapshot();
			expect(
				wrapper
					.find('TextInput')
					.last()
					.prop('value')
			).toBe('bar');
			// expect(onSubmit).toHaveBeenCalledTimes(1);
		});
	});

	it('should render error state if validation fails', async () => {
		const onSubmit = jest.fn();

		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Formik initialValues={{}} onSubmit={onSubmit}>
					<>
						<FormTextInput {...fieldProps[0]} />
						<FormSubmitButton type="submit" name="submit" />
					</>
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(wrapper as any, FormTextInput);

		// Check fields
		expect(
			wrapper
				.find('TextInput')
				.last()
				.prop('name')
		).toBe('username');
		expect(
			wrapper
				.find('TextInput')
				.last()
				.prop('value')
		).toBeUndefined();
		expect(
			wrapper
				.find('TextInput')
				.last()
				.prop('type')
		).toBe('text');
		expect(
			wrapper
				.find('TextInput')
				.last()
				.prop('helperText')
		).toBe('This is a helper text');

		const onChangeText: any = wrapper
			.find('TextInput')
			.last()
			.prop('onChangeText');

		onChangeText(null);

		const handleSubmit: any = wrapper
			.find('Button[type="submit"]')
			.first()
			.prop('onPress');

		handleSubmit();

		// let any pending callbacks in PromiseJobs run
		await Promise.resolve();

		wrapper.update();

		expect(
			wrapper
				.find('TextInput')
				.last()
				.prop('helperText')
		).toBe('This is a helper text');

		// expect(onSubmit).toHaveBeenCalledTimes(1);
	});
});
