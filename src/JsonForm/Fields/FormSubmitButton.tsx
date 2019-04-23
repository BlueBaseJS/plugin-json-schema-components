import { Button, ButtonProps, View } from '@bluebase/components';
import { FormikContext, connect } from 'formik';
import React from 'react';
import { Theme } from '@bluebase/core';


export interface FormSubmitButtonProps extends ButtonProps {
	type: 'submit',
	nested ? : boolean
	name: string,
	styles?:any
	onPress ? :any

}

export const FormSubmitButton = connect( (props: FormSubmitButtonProps & { formik: FormikContext<{}>; }) => {

	const { handleSubmit, isSubmitting,styles,nested } = props;

	return (
		<View style={nested === true ? {} :  styles.wrapper } >

			<Button disabled={isSubmitting} loading={isSubmitting} {...props} onPress={handleSubmit} type="submit" />
		</View>

	);
});

FormSubmitButton.defaultProps = {
	color: 'primary',
	name: 'submit',
	title: 'Submit',
	variant: 'contained',
};

(FormSubmitButton as any).defaultStyles = (theme: Theme) => ({
	wrapper: {
		paddingHorizontal: theme.spacing.unit * 2,
		paddingVertical: 2

	}
})