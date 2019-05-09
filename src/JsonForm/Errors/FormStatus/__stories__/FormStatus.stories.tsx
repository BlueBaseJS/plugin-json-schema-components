import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const FormStatus = getComponent('FormStatus');

storiesOf('FormStatus', module)

.add('With no items', () => (
	<FormStatus  />
))
