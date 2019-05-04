import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const ErrorList = getComponent('ErrorList');

storiesOf('ErrorList', module)

.add('With no errors', () => (
	<ErrorList errors={[]} />
))

.add('With a Single Errors', () => (
	<ErrorList errors={['Error 1']} />
))

.add('With Multiple Errors', () => (
	<ErrorList errors={['Error 1', 'Error 2']} />
))

;
