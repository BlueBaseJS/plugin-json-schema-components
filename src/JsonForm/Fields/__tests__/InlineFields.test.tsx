import { BlueBaseApp } from '@bluebase/core';
import { Formik } from 'formik';
import MaterialUIPlugin from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import { getComponent } from '@bluebase/core';
import deepmerge from 'deepmerge';
import { InlineFields } from '../InlineFields';

const fieldProps = {
	direction: 'right',
	name: 'form-actions',
	type: 'actions',

	fields: [
		{
			name: 'reset',
			type: 'reset',
		},
		{
			name: 'submit',
			title: 'Login',
			type: 'submit',
		},
	],
};

const initialValues = {};

describe('InlineFields', () => {
	it('should render all form fields in the schema', async () => {
		const onSubmit = jest.fn();

		const InlineFields = getComponent('InlineFields');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<InlineFields style={{}} {...(fieldProps as any)} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, InlineFields);

		// expect(component).toMatchSnapshot();

		const root: any = component
			.find('[testID="form-actions"]')
			.first()
			.prop('style');
		const rootStyles: any = deepmerge.all(root.filter((x: any) => !!x));

		// Check fields
		expect(rootStyles.justifyContent).toBe('flex-end');
	});

	it('should render all form fields in the schema with direction left', async () => {
		const onSubmit = jest.fn();

		const InlineFields = getComponent('InlineFields');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<InlineFields style={{}} {...(fieldProps as any)} direction="left" />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, InlineFields);

		// expect(component).toMatchSnapshot();

		const root: any = component
			.find('[testID="form-actions"]')
			.first()
			.prop('style');
		const rootStyles: any = deepmerge.all(root.filter((x: any) => !!x));
		const childStyles: any = component
			.find('FieldWrapper View')
			.first()
			.prop('style');

		// Check fields
		expect(rootStyles.justifyContent).toBe('flex-start');
		expect(childStyles[0].margin).toBe(-8);
	});

	it('should render all form fields in the schema with direction null', async () => {
		const onSubmit = jest.fn();

		const InlineFields = getComponent('InlineFields');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<InlineFields style={{}} {...(fieldProps as any)} direction={null} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, InlineFields);

		// expect(component).toMatchSnapshot();

		const root: any = component
			.find('[testID="form-actions"]')
			.first()
			.prop('style');
		const rootStyles: any = deepmerge.all(root.filter((x: any) => !!x));

		// Check fields
		expect(rootStyles.justifyContent).toBeUndefined();
	});

	it('should render all forms with empty style', async () => {
		const onSubmit = jest.fn();

		const InlineFields = getComponent('InlineFields');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<InlineFields style={{}} styles={{}} {...(fieldProps as any)} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, InlineFields);

		// expect(component).toMatchSnapshot();

		const root: any = component
			.find('[testID="form-actions"]')
			.first()
			.prop('style');
		const rootStyles: any = deepmerge.all(root.filter((x: any) => !!x));
		const childStyles: any = component
			.find('FieldWrapper View')
			.first()
			.prop('style');

		// Check fields
		expect(rootStyles.justifyContent).toBe('flex-end');
		expect(childStyles[0].margin).toBe(-8);
	});

	it('should render all form fields in the schema', async () => {
		const onSubmit = jest.fn();

		// const InlineFields = getComponent('InlineFields');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<InlineFields
						style={{}}
						//styles={{ fieldContainer: '', root: { justifyContent: 'flex-end' } }}
						{...(fieldProps as any)}
					/>
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, InlineFields);

		// Check fields
		expect(
			component
				.find('View[testID="fieldTest"]')
				.first()
				.prop('style')
		).toHaveLength(2);
	});
});
