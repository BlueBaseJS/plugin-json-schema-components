import 'cross-fetch/polyfill';
import { EditProfileProfileForm, SignupForm, mocks } from '../__stories__';
import { BlueBaseApp } from '@bluebase/core';
import BlueBasePluginApollo from '@bluebase/plugin-apollo';
import { MockedProvider } from 'react-apollo/test-utils';
import Plugin from '../../index';
import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import { waitForElement } from 'enzyme-async-helpers';

describe('SignupForm', () => {

	describe('GraphQL', () => {

		it('should show a network error', async () => {

			const wrapper = mount(
				<BlueBaseApp
					plugins={[BlueBasePluginApollo, Plugin]}
					configs={{ 'plugin.apollo.httpLinkOptions': { uri: 'http://graphql' } }}
				>
					<SignupForm />
				</BlueBaseApp>
			);

			await waitForElement(wrapper, SignupForm);

			const onPress: () => void = wrapper.find('Button').first().prop('onPress');
			onPress(); // fires the mutation

			wrapper.update();
			expect(wrapper.find('FormStatusList[type="error"]').first().prop('items')).toHaveLength(0);

			await wait(100); // wait for response

			wrapper.update();
			// expect(wrapper).toMatchSnapshot();
			expect(wrapper.find('FormStatusList[type="error"]').first().prop('items')).toHaveLength(1);
		});

		it('should show an unauthenticated error', async () => {

			const wrapper = mount(
				<BlueBaseApp plugins={[BlueBasePluginApollo, Plugin]}>
					<MockedProvider mocks={[mocks.graphQLErrorsUnAuthenticated]} addTypename={false}>
						<SignupForm />
					</MockedProvider>
				</BlueBaseApp>
			);

			await waitForElement(wrapper, SignupForm);

			const onPress: () => void = wrapper.find('Button').first().prop('onPress');
			onPress(); // fires the mutation

			wrapper.update();
			expect(wrapper.find('FormStatusList[type="error"]').first().prop('items')).toHaveLength(0);

			await wait(100); // wait for response
			wrapper.update();

			const items: string[] = wrapper.find('FormStatusList[type="error"]').first().prop('items');
			expect(items).toHaveLength(1);
			expect(items[0]).toBe('forbidden');
		});

		it('should show field errors', async () => {

			const wrapper = mount(
				<BlueBaseApp plugins={[BlueBasePluginApollo, Plugin]}>
					<MockedProvider mocks={[mocks.graphQLErrorsBadUserInput]} addTypename={false}>
						<SignupForm />
					</MockedProvider>
				</BlueBaseApp>
			);

			await waitForElement(wrapper, SignupForm);

			// fires the mutation
			const onPress: () => void = wrapper.find('Button').first().prop('onPress');
			onPress();

			// wait for response
			wrapper.update();
			expect(wrapper.find('FormStatusList[type="error"]').first().prop('items')).toHaveLength(0);

			// Pre Validation
			let firstName: any = wrapper.find('TextInput[name="firstName"]').first();
			expect(firstName.prop('error')).toBe(undefined);
			expect(firstName.prop('helperText')).toBe(undefined);

			let password: any = wrapper.find('TextInput[name="password"]').first();
			expect(password.prop('error')).toBe(undefined);
			expect(password.prop('helperText')).toBe(undefined);

			// wait for response
			await wait(100);
			wrapper.update();

			// Post Validation
			firstName = wrapper.find('TextInput[name="firstName"]').first();
			expect(firstName.prop('error')).toBe(true);
			expect(firstName.prop('helperText')).toBe('I m sorry, but we dont like your name.');

			password = wrapper.find('TextInput[name="password"]').first();
			expect(password.prop('error')).toBe(true);
			expect(password.prop('helperText')).toBe('The password cannot be less than 8 characters');
		});

		it('should show a success state', async () => {

			const onSuccess = (_res: any, _vals: any, { setStatus }: any) => setStatus({ success: ['Done!'] });

			const wrapper = mount(
				<BlueBaseApp plugins={[BlueBasePluginApollo, Plugin]}>
					<MockedProvider mocks={[mocks.success]} addTypename={false}>
						<SignupForm onSuccess={onSuccess} />
					</MockedProvider>
				</BlueBaseApp>
			);

			await waitForElement(wrapper, SignupForm);

			const onPress: () => void = wrapper.find('Button').first().prop('onPress');
			onPress(); // fires the mutation

			wrapper.update();
			expect(wrapper.find('FormStatusList[type="success"]').first().prop('items')).toHaveLength(0);

			await wait(100); // wait for response
			wrapper.update();

			// expect(wrapper).toMatchSnapshot();
			const items: string[] = wrapper.find('FormStatusList[type="success"]').first().prop('items');
			expect(items).toHaveLength(1);
			expect(items[0]).toBe('Done!');
		});

		it('should not crash without a custom onSuccess handler', async () => {

			const wrapper = mount(
				<BlueBaseApp plugins={[BlueBasePluginApollo, Plugin]}>
					<MockedProvider mocks={[mocks.success]} addTypename={false}>
						<SignupForm />
					</MockedProvider>
				</BlueBaseApp>
			);

			await waitForElement(wrapper, SignupForm);

			const onPress: () => void = wrapper.find('Button').first().prop('onPress');
			onPress(); // fires the mutation

			wrapper.update();
			expect(wrapper.find('FormStatusList[type="success"]').first().prop('items')).toHaveLength(0);

			await wait(100); // wait for response
			wrapper.update();

			// expect(wrapper).toMatchSnapshot();
			const items: string[] = wrapper.find('FormStatusList[type="success"]').first().prop('items');
			expect(items).toHaveLength(0);
		});

		it('should fetch initialValues from a graphql query', async () => {

			const wrapper = mount(
				<BlueBaseApp plugins={[BlueBasePluginApollo, Plugin]}>
					<MockedProvider mocks={[mocks.viewerQuery, mocks.success]} addTypename={false}>
						<EditProfileProfileForm onError={null as any} onSuccess={null as any} />
					</MockedProvider>
				</BlueBaseApp>
			);

			await waitForElement(wrapper, EditProfileProfileForm);

			// expect(wrapper).toMatchSnapshot();
			expect(wrapper.find('TextInput[name="firstName"]').first().prop('value')).toBe('Abdul Rehman');

			expect(wrapper.find('TextInput[name="lastName"]').first().prop('value')).toBe('Talat');

			// fires the mutation
			const onPress: () => void = wrapper.find('Button').first().prop('onPress');
			onPress();
		});

	});


});
