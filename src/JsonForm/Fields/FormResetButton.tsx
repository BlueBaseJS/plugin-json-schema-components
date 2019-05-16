import { Button, ButtonProps, View } from '@bluebase/components';
import { FormikContext, connect } from 'formik';
import { Omit, Theme } from '@bluebase/core';
import { StyleProp, ViewStyle } from 'react-native';
import React from 'react';

export interface FormResetButtonStyles {
	root: StyleProp<ViewStyle>;
	button: StyleProp<ViewStyle>;
}

export interface FormResetButtonProps extends Omit<ButtonProps, 'styles'> {
	type: 'reset';
	name: string;
	styles?: Partial<FormResetButtonStyles>;
}

export const FormResetButton = connect((props: FormResetButtonProps & { formik: FormikContext<{}>; }) => {

	const { handleReset } = props.formik;
	const { styles = {}, ...rest } = props;

	return (
		<View style={styles.root}>
			<Button
				style={styles.button}
				{...rest}
				onPress={handleReset}
				type="reset"
			/>
		</View>
	);
});

FormResetButton.defaultProps = {
	name: 'reset',
	title: 'Reset',
	variant: 'text',
};

(FormResetButton as any).defaultStyles = (theme: Theme) => ({
	root: {
		padding: theme.spacing.unit * 2,
	},

	button: {},
});