import { getComponent } from '@bluebase/core';
import React from 'react';

import { FormTextInputProps } from './FormTextInput';

const FormTextInput = getComponent('FormTextInput');

export interface FormEmailInputProps extends FormTextInputProps {
	type: 'email',
	name: string,
}

export const FormEmailInput = (props: FormEmailInputProps) => (
	<FormTextInput
		{...props}
		type="email"
		keyboardType="email-address"
		autoCapitalize="none"
	/>
);

