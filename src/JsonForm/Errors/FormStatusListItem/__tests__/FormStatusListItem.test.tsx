import { BlueBaseApp } from '@bluebase/core';
import MaterialUIPlugin from '@bluebase/plugin-material-ui';
import React from 'react';
import { mount } from 'enzyme';
import Plugin from '../../../..';
import { waitForElement } from 'enzyme-async-helpers';
import { getComponent } from '@bluebase/core';
import { FormStatusListItem } from '../FormStatusListItem';

describe('FormStatusListItem', () => {
	it('should render all formListItem with success scenario', async () => {
		const FormStatusListItem = getComponent('FormStatusListItem');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<FormStatusListItem type="success">{'Form is submitted successfully'}</FormStatusListItem>
			</BlueBaseApp>
		);
		await waitForElement(component as any, FormStatusListItem);
		// expect(component).toMatchSnapshot();

		const root: any = component
			.find('[testID="FormStatusListitem-View"]')
			.last()
			.props();
		const color = root.children[1].props.style.color;
		const children = root.children[1].props.children;

		expect(component.find('FormStatusListItem').children()).toHaveLength(1);
		expect(color).toEqual('#4caf50');
		expect(children).toEqual('Form is submitted successfully');
	});

	it('should render all formListItem with warning scenario', async () => {
		const FormStatusListItem = getComponent('FormStatusListItem');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<FormStatusListItem type="warning">{'Form fields are missing'}</FormStatusListItem>
			</BlueBaseApp>
		);
		await waitForElement(component as any, FormStatusListItem);
		// expect(component).toMatchSnapshot();

		const root: any = component
			.find('[testID="FormStatusListitem-View"]')
			.last()
			.props();
		const color = root.children[1].props.style.color;
		const children = root.children[1].props.children;

		expect(component.find('FormStatusListItem').children()).toHaveLength(1);
		expect(color).toEqual('#ffa000');
		expect(children).toEqual('Form fields are missing');
	});
	it('should render all formListItem with error scenario', async () => {
		const FormStatusListItem = getComponent('FormStatusListItem');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<FormStatusListItem type="error" divider>
					{'Form is incomplete'}
				</FormStatusListItem>
			</BlueBaseApp>
		);
		await waitForElement(component as any, FormStatusListItem);
		// expect(component).toMatchSnapshot();

		const root: any = component
			.find('[testID="FormStatusListitem-View"]')
			.last()
			.props();
		const color = root.children[1].props.style.color;
		const children = root.children[1].props.children;
		const divider = root.style;

		expect(divider.borderBottomWidth).toEqual(1);
		expect(color).toEqual('#f44336');
		expect(children).toEqual('Form is incomplete');
	});

	it('should render all with divider prop and type XYZ', async () => {
		const FormStatusListItem = getComponent('FormStatusListItem');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<FormStatusListItem type="nothing" divider></FormStatusListItem>
			</BlueBaseApp>
		);
		await waitForElement(component as any, FormStatusListItem);

		//for default style and coverage of default switch
		const root: any = component
			.find('[testID="FormStatusListitem-View"]')
			.last()
			.props();
		expect(root.style.borderBottomWidth).toEqual(1);
	});

	it('should render all with divider prop and type XYZ', async () => {
		// const FormStatusListItem = getComponent('FormStatusListItem');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<FormStatusListItem
					//styles={{ root: { style: { borderBottomWidth: 0 } } } as any}
					type="success"
					divider
				>
					list
				</FormStatusListItem>
			</BlueBaseApp>
		);
		await waitForElement(component as any, FormStatusListItem);

		//for default style and coverage of default switch
		// const root: any = component
		// 	.find('[testID="FormStatusListitem-View"]')
		// 	.last()
		// 	.props();
		// expect(root.style.borderBottomWidth).toEqual(1);
	});
});
