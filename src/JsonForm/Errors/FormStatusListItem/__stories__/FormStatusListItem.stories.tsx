import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const FormStatusListItem = getComponent('FormStatusListItem');

storiesOf('FormStatusListItem', module)

.add('Success', () => (
	<FormStatusListItem type="success">Oh my God!</FormStatusListItem>
))

.add('Success With Divider', () => (
	<FormStatusListItem type="success" divider>Oh my God!</FormStatusListItem>
))

.add('Warning', () => (
	<FormStatusListItem type="warning">Oh my God!</FormStatusListItem>
))

.add('Warning With Divider', () => (
	<FormStatusListItem type="warning" divider>Oh my God!</FormStatusListItem>
))

.add('Error', () => (
	<FormStatusListItem type="error">Oh my God!</FormStatusListItem>
))

.add('Error With Divider', () => (
	<FormStatusListItem type="error" divider>Oh my God!</FormStatusListItem>
))

;
