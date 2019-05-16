import { BlueBaseApp } from '@bluebase/core';
import MaterialUIPlugin from '@bluebase/plugin-material-ui';
import React from 'react';
import { mount } from 'enzyme';
import Plugin from '../../../..'
import { waitForElement } from 'enzyme-async-helpers';
import { getComponent } from '@bluebase/core';
import {Formik} from 'formik'

describe('FormStatus', () => {

	it('should render all form fields in the schema', async () => {
		const FormStatus = getComponent('FormStatus');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
			<Formik initialValues={{value:'Test'}} onSubmit={console.log}  >
					<FormStatus />
			</Formik>
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatus);
		// expect(component).toMatchSnapshot();

	});

})

