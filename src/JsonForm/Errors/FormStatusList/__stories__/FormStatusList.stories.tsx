import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';

const FormStatusList = getComponent('FormStatusList');

storiesOf('FormStatusList', module)

	.add('With no items', () => (
		<FormStatusList items={[]} />
	))

	.add('With a Single Errors', () => (
		<FormStatusList items={['Error 1']} />
	))

	.add('With Multiple Errors', () => (
		<FormStatusList type="error" items={['Error 1', 'Error 2']} />
	))

	.add('With Multiple Warnings', () => (
		<FormStatusList type="warning" items={['Error 1', 'Error 2']} />
	))

	.add('With Multiple Successes', () => (
		<FormStatusList type="success" items={['Error 1', 'Error 2']} />
	))

;
