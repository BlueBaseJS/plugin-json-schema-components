import {
	BaseFormField,
	FormEmailInput,
	FormNumberInput,
	FormPasswordInput,
	FormResetButton,
	FormSubmitButton,
	FormTextInput,
	FormUrlInput,
	JsonForm,
} from './JsonForm';
import { JsonLayout } from './JsonLayout';
// import { TextInput } from 'react-native';
import { createPlugin } from '@bluebase/core';

export default createPlugin({
	categories: ['ui'],
	description: 'A utility to build pluggable components based on JSON schema!',
	key: 'plugin-json-schema-components',
	name: 'Json Schema Components',
	version: '0.0.1',

	components: {
		BaseFormField,
		FormEmailInput,
		FormNumberInput,
		FormPasswordInput,
		FormResetButton,
		FormSubmitButton,
		FormTextInput,
		FormUrlInput,
		JsonForm,
		JsonLayout,
	},
});
