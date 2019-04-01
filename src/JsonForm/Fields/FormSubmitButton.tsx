import { ActivityIndicator, Button, ButtonProps } from '@bluebase/components';
import { FormikContext, connect } from 'formik';
import React from 'react';

export interface FormSubmitButtonProps extends ButtonProps {
	type: 'submit',
	name: string,
}

// TODO: handle submitting state
export const FormSubmitButton = connect((props: FormSubmitButtonProps & { formik: FormikContext<{}>; }) => {

	const { handleSubmit, isSubmitting } = props.formik;
	const children = isSubmitting ? <ActivityIndicator color="white" /> : props.children;

	return (
		<Button disabled={isSubmitting} {...props} onPress={handleSubmit} type="submit">
		{children}
		</Button>
	);
});

FormSubmitButton.defaultProps = {
	color: 'primary',
	name: 'submit',
	title: 'Submit',
	variant: 'contained',
};
