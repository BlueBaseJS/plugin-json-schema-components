import { BaseFormFieldProps } from '../BaseFormField';
import React from 'react';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');

storiesOf('BaseFormField', module)

	.add('With default props', () => (
		<BaseFormField label="First Name" />
	));