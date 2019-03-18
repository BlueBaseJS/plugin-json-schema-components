import { ButtonProps, getComponent } from '@bluebase/components';
import { FormikContext, connect } from 'formik';
import React from 'react';

const Button = getComponent<ButtonProps>('Button');

export interface SubmitInputProps extends ButtonProps {
}

// TODO: handle submitting state
export const SubmitInput = connect((props: SubmitInputProps & { formik: FormikContext<{}>; }) => (
	<Button {...props} onPress={props.formik.handleSubmit} type="submit" />
));

SubmitInput.defaultProps = {
	color: 'primary',
	title: 'Submit',
	variant: 'contained',
};
