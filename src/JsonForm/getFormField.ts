import { getComponent } from '@bluebase/components';

const DefaultInputs = ['FormTextInput', 'TextInput', 'Noop'];
const DefaultButtons = ['Button', 'Noop'];

const FieldResolutionMap: any = {
	actions: ['FormActions', 'Noop'],
	checkbox: ['FormCheckboxInput', 'Noop'],
	color: ['FormColorInput', ...DefaultInputs],
	component: ['JsonLayout', 'Noop'],
	date: ['FormDateInput', ...DefaultInputs],
	email: ['FormEmailInput', ...DefaultInputs],
	number: ['FormNumberInput', ...DefaultInputs],
	password: ['FormPasswordInput', ...DefaultInputs],
	picker: ['FormPickerInput', 'Picker', 'Noop'],
	'radio-group': ['FormRadioGroupInput', 'Noop'],
	range: ['FormRangeInput', ...DefaultInputs],
	reset: ['FormResetButton', ...DefaultButtons],
	search: ['FormSearchInput', ...DefaultInputs],
	submit: ['FormSubmitButton', ...DefaultButtons],
	switch: ['FormSwitchInput', 'FormCheckboxInput', 'Noop'],
	tel: ['FormTelInput', ...DefaultInputs],
	time: ['FormTimeInput', ...DefaultInputs],
	url: ['FormUrlInput', ...DefaultInputs],
};

export const getFormField = (type: string) =>
	type && FieldResolutionMap[type]
		? getComponent(...FieldResolutionMap[type])
		: getComponent(...DefaultInputs);
