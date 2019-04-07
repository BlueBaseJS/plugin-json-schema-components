import { Button, ButtonProps } from '@bluebase/components';
import { FormikContext, connect } from 'formik';
import React from 'react';

export interface FormSubmitButtonProps extends ButtonProps {
	type: 'submit',
	name: string,
}

export const FormSubmitButton = connect((props: FormSubmitButtonProps & { formik: FormikContext<{}>; }) => {

	const { handleSubmit, isSubmitting } = props.formik;

	return (
		<Button disabled={isSubmitting} loading={isSubmitting} {...props} onPress={handleSubmit} type="submit" />
	);
});

FormSubmitButton.defaultProps = {
	color: 'primary',
	name: 'submit',
	title: 'Submit',
	variant: 'contained',
};
