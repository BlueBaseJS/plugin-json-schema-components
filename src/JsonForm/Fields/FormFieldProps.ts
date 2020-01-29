import { FormCheckboxInputProps } from './FormCheckboxInput';
import { FormComponentFieldProps } from './FormComponentField';
import { FormEmailInputProps } from './FormEmailInput';
import { FormNumberInputProps } from './FormNumberInput';
import { FormPasswordInputProps } from './FormPasswordInput';
import { FormRadioGroupInputProps } from './FormRadioGroupInput';
import { FormResetButtonProps } from './FormResetButton';
import { FormSubmitButtonProps } from './FormSubmitButton';
import { FormSwitchInputProps } from './FormSwitchInput';
import { FormTextInputProps } from './FormTextInput';
import { FormUrlInputProps } from './FormUrlInput';
import { InlineFieldsProps } from './InlineFields';

export type FormFieldProps = { type: string } & (
	| InlineFieldsProps
	| FormCheckboxInputProps
	| FormComponentFieldProps
	| FormEmailInputProps
	| FormNumberInputProps
	| FormPasswordInputProps
	| FormRadioGroupInputProps
	| FormResetButtonProps
	| FormSubmitButtonProps
	| FormSwitchInputProps
	| FormTextInputProps
	| FormUrlInputProps
);
