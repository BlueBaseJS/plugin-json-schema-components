import { Button, ButtonProps, View } from '@bluebase/components';
import { Omit, Theme, useStyles } from '@bluebase/core';
import { useFormikContext } from 'formik';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface FormSubmitButtonStyles {
	root: StyleProp<ViewStyle>;
	button: StyleProp<ViewStyle>;
}

export interface FormSubmitButtonProps extends Omit<ButtonProps, 'styles'> {
	type: 'submit';
	name: string;
	styles?: Partial<FormSubmitButtonStyles>;
}

const defaultStyles = (theme: Theme) => ({
	root: {
		padding: theme.spacing.unit * 2,
	},

	button: {},
});

export const FormSubmitButton = (props: FormSubmitButtonProps) => {
	const { handleSubmit, isSubmitting } = useFormikContext();
	const { styles: _styles, ...rest } = props;
	const styles = useStyles('FormSubmitButton', props, defaultStyles);

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
};

FormSubmitButton.defaultProps = {
	color: 'primary',
	name: 'submit',
	title: 'Submit',
	variant: 'contained',
};
