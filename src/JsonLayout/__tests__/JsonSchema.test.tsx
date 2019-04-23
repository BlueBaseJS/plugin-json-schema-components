import { JsonLayout, createJsonLayout } from '../';
import { BlueBaseApp } from '@bluebase/core';
import React from 'react';
import {Text} from 'react-native'
import TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { waitForElement } from 'enzyme-async-helpers';


describe('JsonLayout', () => {

	test(`should render a text component with red color`, (done) => {
		const component = TestRenderer.create(
			<BlueBaseApp>
				<JsonLayout
					schema={{
						component: 'Text',
						props: {
							style: {
								color: 'red'
							}
						},
						text: 'This component is generated through JsonLayout Component',
					}}
				/>
			</BlueBaseApp>
		);


		setTimeout(() => {
			const tree = component.toJSON();
			expect((tree as any).props.style[1]).toMatchObject({
				color: 'red'
			});
			expect((tree as any).children.join()).toBe('This component is generated through JsonLayout Component');
			//expect(tree).toMatchSnapshot();
			done();
		});
	});

	test(`should create layout through createJsonLayout function`, (done) => {

		const Layout = createJsonLayout({
			schema: {
				component: 'Text',
				props: {
					style: {
						color: 'red'
					}
				},
				text: 'This component is generated through JsonLayout Component',
			}
		});
		const component = TestRenderer.create(
			<BlueBaseApp>
				<Layout/>
			</BlueBaseApp>
		);

		
		setTimeout(() => {
			const tree = component.toJSON();
			expect((tree as any).props.style[1]).toMatchObject({
				color: 'red'
			});
			expect((tree as any).children.join()).toBe('This component is generated through JsonLayout Component');
			//expect(tree).toMatchSnapshot();
			done();
		});
	});

	test(`should render a text component with red color that is processed by filters`, (done) => {

		const filter = (schema: any, args: { style: any }) => ({
			...schema,
			props: {
				...schema.props,
				style: {
					...schema.props.style,
					...args.style,
				}
			},
			text: 'Content changed by filter!',
		});

		const component = TestRenderer.create(
			<BlueBaseApp filters={{ 'content-filter': filter }}>
				<JsonLayout
					filter="content-filter"
					args={{ style: { color: 'blue' } }}
					schema={{
						component: 'Text',
						props: {
							style: {
								color: 'red'
							}
						},
						text: 'This component is generated through JsonLayout Component',
					}
				}
				/>
			</BlueBaseApp>
		);

		setTimeout(() => {
			const tree = component.toJSON();
			expect((tree as any).props.style[1]).toMatchObject({
				color: 'blue'
			});
			expect((tree as any).children.join()).toBe('Content changed by filter!');
			//expect(tree).toMatchSnapshot();
			done();
		});
	});

	test(`should render a null for unknown component`, async () => {

		const component = mount(
			<BlueBaseApp>
				<JsonLayout
					schema={{
						component: 'Foo',
						text: 'This component is generated through JsonLayout Component',
					}}
				/>
			</BlueBaseApp>
		);
		await waitForElement(component as any, Text);

			expect(component.find('Text').last().text()).toBe('Could not parse React JSON Schema. Reason: Could not resolve component.');

	});

});
