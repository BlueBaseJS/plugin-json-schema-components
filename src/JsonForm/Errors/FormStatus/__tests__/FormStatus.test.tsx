import { BlueBaseApp } from '@bluebase/core';
import MaterialUIPlugin from '@bluebase/plugin-material-ui';
import React from 'react';
import { mount } from 'enzyme';
import Plugin from '../../../..'
import { waitForElement } from 'enzyme-async-helpers';
import { getComponent } from '@bluebase/core';
import {Formik} from 'formik'

describe('FormStatus', () => {

	// it('should render all form fields in the schema', async () => {
	// 	const FormStatus = getComponent('FormStatus');

	// 	const component = mount(
	// 		<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
	// 			<Formik initialValues={{}} onSubmit={console.log} >
	// 				<FormStatus formik={{  errors: "" }} />
	// 			</Formik>
	// 		</BlueBaseApp>
	// 	);
	// 	await waitForElement(component as any, FormStatus);
	// 	expect(component).toMatchSnapshot();

	// });

	it('should render all form fields in the schema', async () => {
		const FormStatus = getComponent('FormStatus');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
			<Formik initialValues={{}} onSubmit={console.log}>
					<FormStatus formik={{status :{warnings:{}}} }/>
			</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatus);
		// expect(component).toMatchSnapshot();

	});

	// it('should render all form fields in the schema', async () => {
	// 	const FormStatus = getComponent('FormStatus');

	// 	const component = mount(
	// 		<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
	// 				<FormStatus  formik={{status :{success:{}}}}  />
	// 		</BlueBaseApp>
	// 	);

	// 	await waitForElement(component as any, FormStatus);
	// 	expect(component).toMatchSnapshot();

	// });

})

