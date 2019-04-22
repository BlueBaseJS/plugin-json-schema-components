import { ButtonProps, getComponent ,View} from '@bluebase/components';
import { FormikContext, connect } from 'formik';
import React from 'react';
import { Theme } from '@bluebase/core';

const Button = getComponent<ButtonProps>('Button');

export interface FormResetButtonProps extends ButtonProps {
	type: 'reset',
	name: string,
	title? :string
	  styles?: any
	  nested ?:boolean
}

export const FormResetButton = connect((props: FormResetButtonProps & { formik: FormikContext<{}>; }) => {
	const { nested, formik, styles, ...others } = props;

	return (

	<View style={nested === false ?  styles.wrapper : {}} >
		<Button {...others} onPress={formik.handleReset} type="reset" />
	 </View>
	)
}
);


FormResetButton.defaultProps = {
	name: 'reset',
	title: 'Reset',
	variant: 'text',
};


(FormResetButton as any).defaultStyles = (theme: Theme) => ({
	wrapper: {
		paddingHorizontal: theme.spacing.unit * 2,
		paddingVertical: 2

	}
})