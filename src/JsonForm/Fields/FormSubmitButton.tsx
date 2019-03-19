import { ActivityIndicator, Button, ButtonProps } from '@bluebase/components';
import { FormikContext, connect } from 'formik';
import React from 'react';

export interface FormSubmitButtonProps extends ButtonProps {
}

// TODO: handle submitting state
export const FormSubmitButton = connect((props: FormSubmitButtonProps & { formik: FormikContext<{}>; }) => {

	const children = props.formik.isSubmitting ? <ActivityIndicator color="white" /> : props.children;

	return (
		<Button {...props} onPress={props.formik.handleSubmit} type="submit">
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
