import { getComponent } from '@bluebase/core';
import React from 'react';

import { FormTextInputProps } from './FormTextInput';

const FormTextInput = getComponent('FormTextInput');

export interface FormPasswordInputProps extends FormTextInputProps {
	type: 'password',
	name: string,
}

export const FormPasswordInput = (props: FormPasswordInputProps) => (
	<FormTextInput {...props} secureTextEntry type="password" />
);

