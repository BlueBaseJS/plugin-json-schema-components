import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const ErrorListItem = getComponent('ErrorListItem');

storiesOf('ErrorListItem', module)

.add('With default props', () => (
	<ErrorListItem>Oh my God!</ErrorListItem>
))

.add('With Divider', () => (
	<ErrorListItem divider>Oh my God!</ErrorListItem>
))

;
