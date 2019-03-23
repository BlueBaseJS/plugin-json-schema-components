import { getComponent } from '@bluebase/components';

const DefaultInputs = ['FormTextInput', 'TextInput', 'Noop'];
const DefaultButtons = ['Button', 'Noop'];

const FieldResolutionMap: any = {
	actions: ['FormActions', 'Noop'],
	color: ['FormColorInput', ...DefaultInputs],
	date: ['FormDateInput', ...DefaultInputs],
	email: ['FormEmailInput', ...DefaultInputs],
	number: ['FormNumberInput', ...DefaultInputs],
	password: ['FormPasswordInput', ...DefaultInputs],
	range: ['FormRangeInput', ...DefaultInputs],
	reset: ['FormResetButton', ...DefaultButtons],
	search: ['FormSearchInput', ...DefaultInputs],
	submit: ['FormSubmitButton', ...DefaultButtons],
	tel: ['FormTelInput', ...DefaultInputs],
	time: ['FormTimeInput', ...DefaultInputs],
	url: ['FormUrlInput', ...DefaultInputs],
};

export const getFormField = (type: string) => (type && FieldResolutionMap[type])
? getComponent(...FieldResolutionMap[type])
: getComponent(...DefaultInputs);