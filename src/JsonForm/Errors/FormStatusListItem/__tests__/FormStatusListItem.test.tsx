import { BlueBaseApp } from '@bluebase/core';
import MaterialUIPlugin from '@bluebase/plugin-material-ui';
import React from 'react';
import { mount } from 'enzyme';
import Plugin from '../../../..'
import { waitForElement } from 'enzyme-async-helpers';
import { getComponent } from '@bluebase/core';
var items = ['apple', 'mango'];


describe('FormStatusListItem', () => {

	it('should render all form fields in the schema', async () => {
		const FormStatusListItem = getComponent('FormStatusListItem');
		const FormStatusList = getComponent('FormStatusList');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
				<FormStatusList items={items} type={'success'}>
					<FormStatusListItem type='warning' />
				</FormStatusList>
			</BlueBaseApp>
		);
		await waitForElement(component as any, FormStatusList);
		expect(component).toMatchSnapshot();

		const root: any = component.find('[testID="FormStatusListitem-View"]').last().props()
		console.log(root)

	});


	it('should render all error list with type -error', async () => {
		const FormStatusListItem = getComponent('FormStatusListItem');

		const component = mount(
			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
					<FormStatusListItem  type = 'error' divider ={true} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, FormStatusListItem);

		// expect(component).toMatchSnapshot();
	    const root: any = component.props().children.props;

	    expect(root.type).toBe('error');
	    expect(root.divider).toBe(true);
	});

	// it('should render all error list with type -success', async () => {
	// 	const FormStatusListItem = getComponent('FormStatusListItem');

	// 	const component = mount(
	// 		<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
	// 				<FormStatusListItem  type = 'success' divider ={false} />
	// 		</BlueBaseApp>
	// 	);

	// 	await waitForElement(component as any, FormStatusListItem);


	// 	// expect(component).toMatchSnapshot();
	//     const root: any = component.props().children.props;

	//     expect(root.type).toBe('success');
	//     expect(root.divider).toBe(false);
	// });

	// it('should render all error list with type -warning', async () => {
	// 	const FormStatusListItem = getComponent('FormStatusListItem');

	// 	const component = mount(
	// 		<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
	// 				<FormStatusListItem type = 'warning' />
	// 		</BlueBaseApp>
	// 	);

	// 	await waitForElement(component as any, FormStatusListItem);

	// 	// expect(component).toMatchSnapshot();

	//       const root: any = component.props().children.props;

	// 	  expect(root.type).toBe('warning');
	// 	//   expect(root.marginHorizontal).toBe(16);
	// });

	// it('should render all error list with type -deafult', async () => {
	// 	const FormStatusListItem = getComponent('FormStatusListItem');

	// 	const component = mount(
	// 		<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
	// 				<FormStatusListItem  type = 'test' divider ={true} />
	// 		</BlueBaseApp>
	// 	);

	// 	await waitForElement(component as any, FormStatusListItem);
	//     const root: any = component.props().children.props;

	//     expect(root.type).toBe('test');
	// });

})

