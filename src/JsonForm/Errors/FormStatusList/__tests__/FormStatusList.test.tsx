import { BlueBaseApp } from '@bluebase/core';
import MaterialUIPlugin from '@bluebase/plugin-material-ui';
import React from 'react';
import { mount } from 'enzyme';
import Plugin from '../../../..'
import { waitForElement } from 'enzyme-async-helpers';
import { getComponent } from '@bluebase/core';
// import { FormStatusListProps } from '../../FormStatusList/FormStatusList';

// const FormStatusList = getComponent<FormStatusListProps>('FormStatusList');


describe('FormStatusList', () => {

	it('should render all error list with  items null', async () => {
		const FormStatusList = getComponent('FormStatusList');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<FormStatusList items={null} divider={true} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatusList);

		//  expect(component).toMatchSnapshot();
		expect(component.find('[testID="FormStatusList-loop"]').exists()).toBeFalsy()

	});

	it('should render all error list with  items empty array', async () => {
		const FormStatusList = getComponent('FormStatusList');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<FormStatusList items={[]} divider={true} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatusList);

		//  expect(component).toMatchSnapshot();

		expect(component.find('[testID="FormStatusList-loop"]').exists()).toBeFalsy()

	});


	it('should render all error list with  items array', async () => {
		const FormStatusList = getComponent('FormStatusList');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<FormStatusList items={['item1', 'item2']} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatusList);

		// expect(component).toMatchSnapshot();
		expect(component.find('[testID="FormStatusList-loop"]').exists()).toBeTruthy()

	});

	it('should render all error list with type -error', async () => {
		const FormStatusList = getComponent('FormStatusList');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<FormStatusList items={['item1', 'item2']} type='error' divider={true} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatusList);

		// expect(component).toMatchSnapshot();

		const root: any = component.find('[testID="FormStatusList-view"]').first().prop('style');
		expect(component.find('[testID="FormStatusList-loop"]').exists()).toBeTruthy()
		expect(root.backgroundColor).toBe('#ffebee');
		expect(root.borderColor).toBe('#f44336');
	});

	it('should render all error list with type -success', async () => {
		const FormStatusList = getComponent('FormStatusList');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<FormStatusList items={['item1', 'item2']} type='success' divider={true} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatusList);
		// expect(component).toMatchSnapshot();

		const root: any = component.find('[testID="FormStatusList-view"]').first().prop('style');
		expect(component.find('[testID="FormStatusList-loop"]').exists()).toBeTruthy()

		expect(root.backgroundColor).toBe('#e8f5e9');
		expect(root.borderColor).toBe('#4caf50');
	});

	it('should render all error list with type -warning', async () => {
		const FormStatusList = getComponent('FormStatusList');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<FormStatusList items={['item1', 'item2']} type='warning' divider={true} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatusList);

		// expect(component).toMatchSnapshot();

		const root: any = component.find('[testID="FormStatusList-view"]').first().prop('style');
		expect(component.find('[testID="FormStatusList-loop"]').exists()).toBeTruthy()


		expect(root.backgroundColor).toBe('#fff3e0');
		expect(root.borderColor).toBe('#ffa000');
		expect(root.marginHorizontal).toBe(16);
	});

	it('should render all error list with type -deafult', async () => {
		const FormStatusList = getComponent('FormStatusList');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<FormStatusList type='test' />
			</BlueBaseApp>
		);
		3
		await waitForElement(component as any, FormStatusList);

		expect(component).toMatchSnapshot();

		const root: any = component.find('[testID="FormStatusList-view"]').first();
		console.log(root)
		expect(root.backgroundColor).toBeUndefined();


	})

})

