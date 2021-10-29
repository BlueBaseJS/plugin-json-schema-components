import { Picker, Slider, Text } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
// import { FormTextInputProps } from '../Fields';
import React from 'react';

import { BaseFormFieldProps } from '../BaseFormField';

const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');
// const FormTextInput = getComponent<FormTextInputProps>('FormTextInput');

storiesOf('BaseFormField', module)

	.add('With Slider', () => (
		<BaseFormField
			left={<Text>Temp</Text>}
			right={<Text>26</Text>}
			MainComponent={Slider}
			label="Username"
			value={100}
		/>
	))

	.add('With Picker', () => (
		<BaseFormField
			left={<Text>Lang</Text>}
			right={<Text>js</Text>}
			MainComponent={Picker}
			label="Language"
			value={100}
		>
			<Picker.Item label="JavaScript" value="js" />
			<Picker.Item label="Java" value="java" />
		</BaseFormField>
	))

;