import { BlueBaseApp, getComponent } from '@bluebase/core';

import { FormStatusList as List } from '../FormStatusList';
import MaterialUIPlugin from '@bluebase/plugin-material-ui';
import Plugin from '../../../..';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe('FormStatusList', () => {
	it('should render all error list with  items null', async () => {
		const FormStatusList = getComponent('FormStatusList');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<FormStatusList items={null} divider={true} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatusList);

		expect(component.find('[testID="FormStatusList-loop"]').exists()).toBeFalsy();
	});

	it('should render all error list with  items empty array', async () => {
		const FormStatusList = getComponent('FormStatusList');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<FormStatusList items={[]} divider={true} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatusList);

		expect(component.find('[testID="FormStatusList-loop"]').exists()).toBeFalsy();
	});

	it('should render all error list with  items array check', async () => {
		const FormStatusList = getComponent('FormStatusList');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<FormStatusList items={['item1', 'item2']} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatusList);

		expect(
			component
				.find('FormStatusList')
				.last()
				.find('FormStatusListItem')
				.first()
				.find('Text')
				.last()
				.text()
		).toBe('item1');
		expect(
			component
				.find('FormStatusList')
				.last()
				.find('FormStatusListItem')
				.last()
				.find('Text')
				.last()
				.text()
		).toBe('item2');
	});

	it('should render all error list with type -error', async () => {
		const FormStatusList = getComponent('FormStatusList');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<FormStatusList items={['item1', 'item2']} type="error" divider={true} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatusList);

		expect(
			component
				.find('FormStatusListItem')
				.last()
				.prop('type')
		).toBe('error');
	});

	it('should render all error list with type -deafult', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<List items={['nice', 'item2']} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, List);

		expect(
			component
				.find('FormStatusListItem')
				.last()
				.prop('type')
		).toBe('error');
	});
});
