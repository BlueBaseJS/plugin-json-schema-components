import { JsonLayout, createJsonLayout } from '../';

import { BlueBaseApp } from '@bluebase/core';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe('JsonLayout', () => {
	test(`should render a text component with red color`, async () => {
		const wrapper = mount(
			<BlueBaseApp>
				<JsonLayout
					schema={{
						component: 'Text',
						props: {
							style: {
								color: 'red',
							},
						},
						text: 'This component is generated through JsonLayout Component',
					}}
				/>
			</BlueBaseApp>
		);

		await waitForElement(wrapper, 'JsonLayout');

		expect(
			wrapper
				.find('JsonLayout Text')
				.last()
				.text()
		).toBe('This component is generated through JsonLayout Component');
	});

	test(`should render a View when Component name is "RCTView"`, async () => {
		const wrapper = mount(
			<BlueBaseApp>
				<JsonLayout
					schema={{
						component: 'RCTView',
						props: {
							testID: 'view-test',
						},
					}}
				/>
			</BlueBaseApp>
		);

		await waitForElement(wrapper, 'JsonLayout');

		expect(wrapper.find('View[testID="view-test"]').exists()).toBe(true);
	});

	test(`should create layout through createJsonLayout function`, async () => {
		const Layout = createJsonLayout({
			schema: {
				component: 'Text',
				props: {
					style: {
						color: 'red',
					},
				},
				text: 'This component is generated through JsonLayout Component',
			},
		});

		const wrapper = mount(
			<BlueBaseApp>
				<Layout />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, 'JsonLayout');

		expect(
			wrapper
				.find('JsonLayout Text')
				.last()
				.text()
		).toBe('This component is generated through JsonLayout Component');
	});

	test(`should render a text component with red color that is processed by filters`, async () => {
		const filter = (schema: any, args: { style: any }) => ({
			...schema,
			props: {
				...schema.props,
				style: {
					...schema.props.style,
					...args.style,
				},
			},
			text: 'Content changed by filter!',
		});

		const wrapper = mount(
			<BlueBaseApp filters={{ 'content-filter': filter }}>
				<JsonLayout
					filter="content-filter"
					args={{ style: { color: 'blue' } }}
					schema={{
						component: 'Text',
						props: {
							style: {
								color: 'red',
							},
						},
						text: 'This component is generated through JsonLayout Component',
					}}
				/>
			</BlueBaseApp>
		);

		await waitForElement(wrapper, 'JsonLayout');

		expect(
			wrapper
				.find('JsonLayout Text')
				.last()
				.text()
		).toBe('Content changed by filter!');
	});

	test(`should render a null for unknown component`, async () => {
		const wrapper = mount(
			<BlueBaseApp>
				<JsonLayout
					schema={{
						component: 'Foo',
						text: 'This component is generated through JsonLayout Component',
					}}
				/>
			</BlueBaseApp>
		);

		await waitForElement(wrapper, '[testID="error-message"]');

		expect(
			wrapper
				.find('[testID="error-message"]')
				.last()
				.text()
		).toBe('Could not parse React JSON Schema. Reason: Could not resolve component: Foo.');
	});
});
