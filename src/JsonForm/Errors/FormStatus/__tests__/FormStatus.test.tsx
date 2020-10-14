import { BlueBaseApp, getComponent } from '@bluebase/core';

import { FormStatusProps } from '../FormStatus';
import { Formik } from 'formik';
import MaterialUIPlugin from '@bluebase/plugin-material-ui';
import Plugin from '../../../..';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const FormStatus = getComponent<FormStatusProps>('FormStatus');

describe('FormStatus', () => {
	it('should render success status', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik
					initialValues={{ value: 'Test' }}
					onSubmit={(() => null) as any}
					initialStatus={{ success: ['success'] }}
				>
					<FormStatus />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(wrapper as any, FormStatus);

		expect(
			wrapper
				.find('FormStatusList Text')
				.last()
				.text()
		).toBe('success');
		const styles: any = wrapper
			.find('FormStatusList Text')
			.last()
			.prop('style');

		expect(styles[1].color).toBe('#4caf50');
	});

	it('should render warnings status', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik
					initialValues={{ value: 'Test' }}
					onSubmit={(() => null) as any}
					initialStatus={{ warnings: ['warnings'] }}
				>
					<FormStatus />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(wrapper as any, FormStatus);

		expect(
			wrapper
				.find('FormStatusList Text')
				.last()
				.text()
		).toBe('warnings');
		const styles: any = wrapper
			.find('FormStatusList Text')
			.last()
			.prop('style');

		expect(styles[1].color).toBe('#f57c00');
	});
	it('should render error status', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<Formik
					initialValues={{ value: 'Test' }}
					onSubmit={(() => null) as any}
					initialErrors={{ form: ['error'] } as any}
				>
					<FormStatus />
				</Formik>
			</BlueBaseApp>
		);

		await waitForElement(wrapper as any, FormStatus);

		const styles: any = wrapper
			.find('FormStatusList Text')
			.last()
			.prop('style');

		expect(styles[1].color).toBe('#f44336');
	});
});
