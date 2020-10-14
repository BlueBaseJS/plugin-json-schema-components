import { Button, ButtonProps, View } from '@bluebase/components';
import { Omit, Theme, useStyles } from '@bluebase/core';
import { StyleProp, ViewStyle } from 'react-native';

import React from 'react';
import { useFormikContext } from 'formik';

export interface FormResetButtonStyles {
	root: StyleProp<ViewStyle>;
	button: StyleProp<ViewStyle>;
}

export interface FormResetButtonProps extends Omit<ButtonProps, 'styles'> {
	type: 'reset';
	name: string;
	styles?: Partial<FormResetButtonStyles>;
}

const defaultStyles = (theme: Theme) => ({
	root: {
		padding: theme.spacing.unit * 2,
	},

	button: {},
});

export const FormResetButton = (props: FormResetButtonProps) => {

	const { styles: _styles, ...rest } = props;
	const styles = useStyles('FormResetButton', props, defaultStyles);

	const { handleReset } = useFormikContext();

	return (
		<View style={styles.root}>
			<Button style={styles.button} {...rest} onPress={handleReset} type="reset" />
		</View>
	);
};


FormResetButton.defaultProps = {
	name: 'reset',
	title: 'Reset',
	variant: 'text',
};
