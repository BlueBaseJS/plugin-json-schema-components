import {
	BaseFormField,
	FormCheckboxInput,
	FormEmailInput,
	FormNumberInput,
	FormPasswordInput,
	FormPickerInput,
	FormRadioGroupInput,
	FormRangeInput,
	FormResetButton,
	FormStatus,
	FormStatusList,
	FormStatusListItem,
	FormSubmitButton,
	FormSwitchInput,
	FormTextInput,
	FormUrlInput,
	InlineFields,
	JsonForm,
} from './JsonForm';
import { JsonGraphqlForm } from './JsonGraphqlForm';
import { JsonLayout } from './JsonLayout';
// import { TextInput } from 'react-native';
import { createPlugin } from '@bluebase/core';

export * from './JsonForm';
export * from './JsonGraphqlForm';

export default createPlugin({
	categories: ['ui'],
	description: 'A utility to build pluggable components based on JSON schema!',
	key: 'plugin-json-schema-components',
	name: 'Json Schema Components',
	version: '0.0.1',

	components: {
		BaseFormField,
		FormCheckboxInput,
		FormEmailInput,
		FormNumberInput,
		FormPasswordInput,
		FormPickerInput,
		FormRadioGroupInput,
		FormRangeInput,
		FormResetButton,
		FormStatus,
		FormStatusList,
		FormStatusListItem,
		FormSubmitButton,
		FormSwitchInput,
		FormTextInput,
		FormUrlInput,
		InlineFields,
		JsonForm,
		JsonGraphqlForm,
		JsonLayout,
	},
});
