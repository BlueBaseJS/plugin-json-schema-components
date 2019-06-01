import * as React from 'react';

import { FormikContext, connect } from 'formik';

export interface FormikEffectProps<Values> {
	onChange: (current: FormikContext<Values>, prev: FormikContext<Values>) => void;
}

class FormikEffect<Values = any> extends React.Component<FormikEffectProps<Values> & any> {
	componentDidUpdate(prevProps: FormikEffectProps<Values> & { formik: FormikContext<Values> }) {
		if (JSON.stringify(prevProps.formik.values) !== JSON.stringify(this.props.formik.values)) {
			// if (prevProps.formik !== this.props.formik) {
			this.props.onChange(this.props.formik, prevProps.formik);
		}
	}

	render() {
		return null;
	}
}

export default connect(FormikEffect);
