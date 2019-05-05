import { BlueBaseApp } from '@bluebase/core';
import MaterialUIPlugin from '@bluebase/plugin-material-ui';
import React from 'react';
import { mount } from 'enzyme';
import Plugin from '../../../..'
import { waitForElement } from 'enzyme-async-helpers';
import { getComponent } from '@bluebase/core';


describe('InlineFields', () => {

	it('should render all form fields in the schema', async () => {
		const FormStatus = getComponent('FormStatus');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
			
					<FormStatus  />
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatus);

	});
})

