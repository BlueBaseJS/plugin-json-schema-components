import { FormActionsProps } from './FormActions';
import { FormEmailInputProps } from './FormEmailInput';
import { FormNumberInputProps } from './FormNumberInput';
import { FormPasswordInputProps } from './FormPasswordInput';
import { FormResetButtonProps } from './FormResetButton';
import { FormSubmitButtonProps } from './FormSubmitButton';
import { FormTextInputProps } from './FormTextInput';
import { FormUrlInputProps } from './FormUrlInput';

export type FormFieldProps =
FormActionsProps |
FormEmailInputProps |
FormNumberInputProps |
FormPasswordInputProps |
FormResetButtonProps |
FormSubmitButtonProps |
FormTextInputProps |
FormUrlInputProps;
