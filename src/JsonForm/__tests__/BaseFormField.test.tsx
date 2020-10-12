import { BlueBaseApp, getComponent } from '@bluebase/core';
import { Slider, Text } from '@bluebase/components';

import { BaseFormFieldProps } from '..';
import BluebasePluginMaterialUI from "@bluebase/plugin-material-ui";
import Plugin from '../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe('BaseFormField', () => {


	it('should render all elements', async () => {

		const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');
		const component = mount(
			<BlueBaseApp plugins={[Plugin, BluebasePluginMaterialUI]}>
				<BaseFormField
					left={<Text>Temp</Text>}
					right={<Text>26</Text>}
					MainComponent={Slider}
					label="Username"
					value={100}
				/>
			</BlueBaseApp>
		);

		await waitForElement(component as any, BaseFormField);

		// expect(component).toMatchSnapshot();

		expect(component.find('[testID="base-form-field"]').last().children()).toHaveLength(3);
		expect(component.find('[testID="base-form-field-left"] Text').last().text()).toBe('Temp');
		expect(component.find('[testID="base-form-field-main"]').last().children()).toHaveLength(1);
		expect(component.find('[testID="base-form-field-right"] Text').last().text()).toBe('26');

	});


	it('should not render any elements', async () => {

		const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<BaseFormField />
			</BlueBaseApp>
		);

		await waitForElement(component as any, BaseFormField);

		// expect(component).toMatchSnapshot();

		expect(component.find('[testID="base-form-field"]').last().children()).toHaveLength(0);
		expect(component.find('[testID="base-form-field-left"]')).toHaveLength(0);
		expect(component.find('[testID="base-form-field-main"]')).toHaveLength(0);
		expect(component.find('[testID="base-form-field-right"]')).toHaveLength(0);

	});

});
