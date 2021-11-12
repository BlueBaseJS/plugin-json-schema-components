import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';

const FormStatus = getComponent('FormStatus');

storiesOf('FormStatus', module)

	.add('With no items', () => (
		<FormStatus />
	));
