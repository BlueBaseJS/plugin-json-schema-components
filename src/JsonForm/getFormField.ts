import { getComponent } from '@bluebase/core';

const DefaultInputs = ['FormTextInput', 'TextInput', 'Noop'];
const DefaultButtons = ['Button', 'Noop'];

export type FieldResolutionMapItem = Array<string | React.ComponentType<any>>;
export type FieldResolutionMapType = { [key: string]: FieldResolutionMapItem };

const FieldResolutionMap: FieldResolutionMapType = {
	array: ['FormArrayField', 'Noop'],
	checkbox: ['FormCheckboxInput', 'Noop'],
	color: ['FormColorInput', ...DefaultInputs],
	component: ['JsonLayout', 'Noop'],
	date: ['FormDateInput', ...DefaultInputs],
	email: ['FormEmailInput', ...DefaultInputs],
	inline: ['InlineFields', 'Noop'],
	'inline-fields': ['InlineFields', 'Noop'],
	number: ['FormNumberInput', ...DefaultInputs],
	password: ['FormPasswordInput', ...DefaultInputs],
	picker: ['FormPickerInput', 'Picker', 'Noop'],
	'radio-group': ['FormRadioGroupInput', 'Noop'],
	range: ['FormRangeInput', ...DefaultInputs],
	reset: ['FormResetButton', ...DefaultButtons],
	search: ['FormSearchInput', ...DefaultInputs],
	status: ['FormStatus'],
	submit: ['FormSubmitButton', ...DefaultButtons],
	switch: ['FormSwitchInput', 'FormCheckboxInput', 'Noop'],
	tel: ['FormTelInput', ...DefaultInputs],
	time: ['FormTimeInput', ...DefaultInputs],
	url: ['FormUrlInput', ...DefaultInputs],
};

export const getFormField = (type: string, map?: FieldResolutionMapType) => {
	const finalMap: FieldResolutionMapType = {
		...FieldResolutionMap,
		...map,
	};

	return type && finalMap[type] ? getComponent(...finalMap[type]) : getComponent(...DefaultInputs);
};
