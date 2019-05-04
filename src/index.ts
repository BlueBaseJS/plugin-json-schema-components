import {
	BaseFormField,
	ErrorList,
	ErrorListItem,
	FormCheckboxInput,
	FormEmailInput,
	FormErrors,
	FormNumberInput,
	FormPasswordInput,
	FormPickerInput,
	FormRadioGroupInput,
	FormRangeInput,
	FormResetButton,
	FormSubmitButton,
	FormSwitchInput,
	FormTextInput,
	FormUrlInput,
	InlineFields,
	JsonForm,
} from './JsonForm';
import { JsonLayout } from './JsonLayout';
// import { TextInput } from 'react-native';
import { createPlugin } from '@bluebase/core';

export * from './JsonForm';

export default createPlugin({
	categories: ['ui'],
	description: 'A utility to build pluggable components based on JSON schema!',
	key: 'plugin-json-schema-components',
	name: 'Json Schema Components',
	version: '0.0.1',

	components: {
		BaseFormField,
		ErrorList,
		ErrorListItem,
		FormCheckboxInput,
		FormEmailInput,
		FormErrors,
		FormNumberInput,
		FormPasswordInput,
		FormPickerInput,
		FormRadioGroupInput,
		FormRangeInput,
		FormResetButton,
		FormSubmitButton,
		FormSwitchInput,
		FormTextInput,
		FormUrlInput,
		InlineFields,
		JsonForm,
		JsonLayout,
	},
});
