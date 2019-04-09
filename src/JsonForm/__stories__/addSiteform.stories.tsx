import { Picker, Text, getComponent } from '@bluebase/components';
import { BaseFormFieldProps } from '../BaseFormField';
 //import { FormTextInputProps } from '../Fields';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
 import { FormTextInputProps } from '../Fields';

const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');
 const FormTextInput = getComponent<FormTextInputProps>('FormTextInput');

storiesOf('Add Site', module)


.add('With Picker', () => (
	<BaseFormField
		left={<Text>Icon</Text>}
		MainComponent={Picker}
		label="Site Type"
		value={100}
	>
		<Picker.Item label="Work" value="js" />
		<Picker.Item label="Office" value="java" />
	</BaseFormField>
))

.add('With Username', () => (
	<BaseFormField
		left={<Text>Icon</Text>}
	 MainComponent={FormTextInput}
		label="Site Type"
		value={100}
	>
	
	</BaseFormField>
))


;

