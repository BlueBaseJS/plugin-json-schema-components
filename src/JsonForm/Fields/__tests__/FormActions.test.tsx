import { BlueBaseApp } from '@bluebase/core';
import { Formik } from 'formik';
import MaterialUIPlugin from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import { getComponent } from '@bluebase/components';
import deepmerge from 'deepmerge';


const fieldProps = {
	direction: 'right',
	name: 'form-actions',
	type: 'actions',

	fields: [{
		name: 'reset',
		type: 'reset',
		nested : true,
	},
	 {
		name: 'submit',
		title: 'Login',
		type: 'submit',
	}
]
};

const initialValues = {
};


describe('FormActions', () => {

	it('should render all form fields in the schema', async () => {

		const onSubmit = jest.fn();

		const FormActions = getComponent('FormActions');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormActions {...fieldProps as any} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormActions);

		// expect(component).toMatchSnapshot();

		const root: any = component.find('[testID="form-actions"]').first().prop('style');
		const rootStyles: any = deepmerge.all(root.filter((x: any) => !!x));
		 const childStyles: any = component.find('FieldWrapper View').first().prop('style');
		// Check fields
		expect(rootStyles.justifyContent).toBe('flex-end');
		 expect(childStyles.marginRight).toBe(16);
		
	});


	it('should render all form fields in the schema with direction left', async () => {

		const onSubmit = jest.fn();
		const FormActions = getComponent('FormActions');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormActions {...fieldProps as any} direction="left" />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormActions);

		 //expect(component).toMatchSnapshot();

		const root: any = component.find('[testID="form-actions"]').first().prop('style');
		const rootStyles: any = deepmerge.all(root.filter((x: any) => !!x));
		const childStyles: any = component.find('FieldWrapper View').first().prop('style');

		// Check fields
		expect(rootStyles.justifyContent).toBe('flex-start');
		expect(childStyles.marginLeft).toBe(16);
	});

	it('should render all form fields in the schema with space between', async () => {

		const onSubmit = jest.fn();
		const FormActions = getComponent('FormActions');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					<FormActions {...fieldProps as any} direction = "space-between"  />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormActions);

		 //expect(component).toMatchSnapshot();

		const root: any = component.find('[testID="form-actions"]').first().prop('style');
		const rootStyles: any = deepmerge.all(root.filter((x: any) => !!x));
		// const childStyles: any = component.find('FieldWrapper View').first().prop('style');

		// Check fields
		expect(rootStyles.justifyContent).toBe('space-between');
		// expect(childStyles.marginLeft).toBe(16);
	});
});
