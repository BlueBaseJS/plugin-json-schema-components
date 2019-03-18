import { TextInputProps, getComponent } from '@bluebase/components';
import React from 'react';

const TextInput = getComponent<TextInputProps>('TextInput');

export interface PasswordInputProps extends TextInputProps {
}

export const PasswordInput = (props: PasswordInputProps) => (
	<TextInput {...props} secureTextEntry type="password" />
);