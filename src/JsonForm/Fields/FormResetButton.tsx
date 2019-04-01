import { ButtonProps, getComponent } from '@bluebase/components';
import { FormikContext, connect } from 'formik';
import React from 'react';

const Button = getComponent<ButtonProps>('Button');

export interface FormResetButtonProps extends ButtonProps {
	type: 'reset',
	name: string,
}

export const FormResetButton = connect((props: FormResetButtonProps & { formik: FormikContext<{}>; }) => (
	<Button {...props} onPress={props.formik.handleReset} type="reset" />
));

FormResetButton.defaultProps = {
	name: 'reset',
	title: 'Reset',
	variant: 'text',
};
