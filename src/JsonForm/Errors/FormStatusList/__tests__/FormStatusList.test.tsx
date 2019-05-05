import { BlueBaseApp } from '@bluebase/core';
import MaterialUIPlugin from '@bluebase/plugin-material-ui';
import React from 'react';
import { mount } from 'enzyme';
import Plugin from '../../../..'
import { waitForElement } from 'enzyme-async-helpers';
import { getComponent } from '@bluebase/core';


describe('FormStatusList', () => {

	it('should render all form fields in the schema', async () => {
		const FormStatusList = getComponent('FormStatusList');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
					<FormStatusList items={null} divider ={true} styles ={{}} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatusList);

		// expect(component).toMatchSnapshot();

		//yet to write
	});


	it('should render all error list with  error empty array', async () => {
		const FormStatusList = getComponent('FormStatusList');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
					<FormStatusList items ={['ncee']} divider ={true} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatusList);

		// expect(component).toMatchSnapshot();

		//yet to write

	});


	it('should render all error list with  error array', async () => {
		const FormStatusList = getComponent('FormStatusList');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
					<FormStatusList items ={['Error1','Error2']} divider ={true} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatusList);

		// expect(component).toMatchSnapshot();

          const root: any = component.find('[testID="FormStatusListitem-actions"]').first().prop('style');

		 expect(root.backgroundColor).toBe('#ffebee');
		 expect(root.borderColor).toBe('#f44336');
	});

	it('should render all error list with type -error', async () => {
		const FormStatusList = getComponent('FormStatusList');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
					<FormStatusList items ={['Error1','Error2']} type = 'error' divider ={true} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatusList);

		// expect(component).toMatchSnapshot();
	
          const root: any = component.find('[testID="FormStatusListitem-actions"]').first().prop('style');

		  expect(root.backgroundColor).toBe('#ffebee');
		  expect(root.borderColor).toBe('#f44336');
	});

	it('should render all error list with type -success', async () => {
		const FormStatusList = getComponent('FormStatusList');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
					<FormStatusList items ={['Error1','Error2']} type = 'success' divider ={true} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatusList);


		// expect(component).toMatchSnapshot();

          const root: any = component.find('[testID="FormStatusListitem-actions"]').first().prop('style');

		expect(root.backgroundColor).toBe('#e8f5e9');
		expect(root.borderColor).toBe('#4caf50');
		expect(root.marginHorizontal).toBe(16);
	});

	it('should render all error list with type -warning', async () => {
		const FormStatusList = getComponent('FormStatusList');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
					<FormStatusList items ={['Error1','Error2']} type = 'warning' divider ={true} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatusList);

		// expect(component).toMatchSnapshot();

		  const root: any = component.find('[testID="FormStatusListitem-actions"]').first().prop('style');

		  expect(root.backgroundColor).toBe('#fff3e0');
		  expect(root.borderColor).toBe('#ffa000');
		  expect(root.marginHorizontal).toBe(16);
	});

	it('should render all error list with type -deafult', async () => {
		const FormStatusList = getComponent('FormStatusList');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
					<FormStatusList items ={['Error1','Error2']} type = 'test' divider ={true} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatusList);

		// expect(component).toMatchSnapshot();

		  const root: any = component.find('[testID="FormStatusListitem-actions"]').first().prop('style');

		  expect(root.backgroundColor).toBeUndefined();
	});



})

