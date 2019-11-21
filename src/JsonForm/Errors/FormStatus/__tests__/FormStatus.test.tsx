import { BlueBaseApp, getComponent } from '@bluebase/core';
import { Formik, FormikContext } from 'formik';

import { FormStatus as Form } from '../FormStatus';
import MaterialUIPlugin from '@bluebase/plugin-material-ui';
import Plugin from '../../../..';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const FormStatus = getComponent('FormStatus');

describe('FormStatus', () => {
	it('should render success status', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={{ value: 'Test' }} onSubmit={() => null}>
					<FormStatus />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatus);
		const formik: FormikContext<any> = component
			.find('FormikConnect(Function)')
			.last()
			.children()
			.prop('formik');

		formik.setFormikState({ status: { success: ['success'] } });
		formik.handleSubmit();
		component.update();

		expect(
			component
				.find('Text')
				.last()
				.text()
		).toBe('success');
		const styles: any = component
			.find('Text')
			.last()
			.prop('style');

		expect(styles[1].color).toBe('#4caf50');
	});

	it('should render warnings status', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={{ value: 'Test' }} onSubmit={() => null}>
					<FormStatus />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatus);
		const formik: FormikContext<any> = component
			.find('FormikConnect(Function)')
			.last()
			.children()
			.prop('formik');

		formik.setFormikState({ status: { warnings: ['warnings'] } });
		formik.handleSubmit();
		component.update();

		expect(
			component
				.find('Text')
				.last()
				.text()
		).toBe('warnings');
		const styles: any = component
			.find('Text')
			.last()
			.prop('style');

		expect(styles[1].color).toBe('#ffa000');
	});
	it('should render error status', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={{ value: 'Test' }} onSubmit={() => null}>
					<FormStatus />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatus);
		const formik: FormikContext<any> = component
			.find('FormikConnect(Function)')
			.last()
			.children()
			.prop('formik');

		formik.setFormikState({ errors: { form: ['error'] } } as any);
		formik.handleSubmit();
		component.update();

		const styles: any = component
			.find('Text')
			.last()
			.prop('style');

		expect(styles[1].color).toBe('#f44336');
	});
	it('should render component', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik initialValues={{ value: 'Test' }} onSubmit={() => null}>
					<Form styles={{}} />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, Form);

		expect(component.find('FormikConnect(Function)').exists()).toBe(true);
	});
});
