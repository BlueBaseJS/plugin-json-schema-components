import { getComponent } from '@bluebase/core';
import React from 'react';

import { FormTextInputProps } from './FormTextInput';

const FormTextInput = getComponent('FormTextInput');

export interface FormUrlInputProps extends FormTextInputProps {
	type: 'url',
	name: string,
}

export const FormUrlInput = (props: FormUrlInputProps) => (
	<FormTextInput
		{...props}
		autoCapitalize="none"
		keyboardType="numeric"
		type="url"
	/>
);

