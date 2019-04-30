import { Button, ButtonProps, View } from '@bluebase/components';
import { FormikContext, connect } from 'formik';
import { Omit, Theme } from '@bluebase/core';
import { StyleProp, ViewStyle } from 'react-native';
import React from 'react';

export interface FormSubmitButtonStyles {
	root: StyleProp<ViewStyle>;
	button: StyleProp<ViewStyle>;
}

export interface FormSubmitButtonProps extends Omit<ButtonProps, 'styles'> {
	type: 'submit';
	name: string;
	styles?: Partial<FormSubmitButtonStyles>;
}

export const FormSubmitButton = connect((props: FormSubmitButtonProps & { formik: FormikContext<{}>; }) => {

	const { handleSubmit, isSubmitting } = props.formik;
	const { styles = {}, ...rest } = props;

	return (
		<View style={styles.root}>
			<Button
				style={styles.button}
				disabled={isSubmitting}
				loading={isSubmitting}
				{...rest}
				onPress={handleSubmit}
				type="submit"
			/>
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
	root: {
		padding: theme.spacing.unit * 2,
	},

	button: {},
});