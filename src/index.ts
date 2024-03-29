// import { TextInput } from 'react-native';
import { createPlugin } from '@bluebase/core';

import {
	BaseFormField,
	FormArrayField,
	FormCheckboxInput,
	FormEmailInput,
	FormGroupField,
	FormNumberInput,
	FormPasswordInput,
	FormPickerInput,
	FormRadioGroupInput,
	FormRangeInput,
	FormResetButton,
	FormSimpleArrayField,
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
import { JsonLayout } from './JsonLayout';
import { VERSION } from './version';

export * from './JsonForm';
export * from './JsonLayout';
export * from './JsonSchemaParser';

export default createPlugin({
	categories: ['ui'],
	description: 'A utility to build pluggable components based on JSON schema!',
	key: 'plugin-json-schema-components',
	name: 'Json Schema Components',
	version: VERSION,

	components: {
		BaseFormField,
		FormArrayField,
		FormCheckboxInput,
		FormEmailInput,
		FormGroupField,
		FormNumberInput,
		FormPasswordInput,
		FormPickerInput,
		FormRadioGroupInput,
		FormRangeInput,
		FormResetButton,
		FormSimpleArrayField,
		FormStatus,
		FormStatusList,
		FormStatusListItem,
		FormSubmitButton,
		FormSwitchInput,
		FormTextInput,
		FormUrlInput,
		InlineFields,
		JsonForm,
		JsonLayout,
	},
});
