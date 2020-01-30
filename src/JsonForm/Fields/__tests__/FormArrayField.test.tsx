import { BlueBaseApp } from '@bluebase/core';
import BlueBasePluginMaterialUI from '@bluebase/plugin-material-ui';
import { FormArrayField } from '../FormArrayField';
import { FormSubmitButton } from '../FormSubmitButton';
import { Formik } from 'formik';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const fieldProps = [
	{
		name: 'friends',
		type: 'array',

		fields: [
			{
				label: 'First Name',
				name: 'firstName',
				required: true,
				type: 'text',
			},
			{
				label: 'Last Name',
				name: 'lastName',
				type: 'text',
			},
		],
	},
	{
		name: 'submit',
		type: 'submit',
	},
];

const initialValues = {
	friends: [
		{
			firstName: 'Abdul Rehman',
			lastName: 'Talat',
		},
		{
			firstName: 'John',
			lastName: 'Doe',
		},
	],
};

describe('FormArrayField', () => {
	it('should render all form fields in the schema', async () => {
		const onSubmit = jest.fn();

		const wrapper = mount(
			<BlueBaseApp plugins={[BlueBasePluginMaterialUI, Plugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<>
						<FormArrayField {...(fieldProps[0] as any)} />
						<FormSubmitButton type="submit" name="submit" />
					</>
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(wrapper as any, FormArrayField);

		// Check fields
		expect(wrapper.find('FormFields')).toHaveLength(2);

		// Minus
		const minus: any = wrapper
			.find('[name="minus"]')
			.first()
			.prop('onPress');

		minus();
		wrapper.update();

		// Check fields
		expect(wrapper.find('FormFields')).toHaveLength(1);

		// Plus
		const plus: any = wrapper
			.find('[title="Add"]')
			.first()
			.prop('onPress');

		plus();
		wrapper.update();

		// Check fields
		expect(wrapper.find('FormFields')).toHaveLength(2);
	});

	it('should handle empty data gracefully', async () => {
		const onSubmit = jest.fn();

		const wrapper = mount(
			<BlueBaseApp plugins={[BlueBasePluginMaterialUI, Plugin]}>
				<Formik initialValues={undefined as any} onSubmit={onSubmit}>
					<>
						<FormArrayField {...({ ...fieldProps[0], fields: undefined } as any)} />
						<FormSubmitButton type="submit" name="submit" />
					</>
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(wrapper as any, FormArrayField);

		// Check fields
		expect(wrapper.find('FormFields')).toHaveLength(0);
	});
});
