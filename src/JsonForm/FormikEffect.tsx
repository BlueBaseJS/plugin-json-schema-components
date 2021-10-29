import { connect, FormikContextType } from 'formik';
import * as React from 'react';

export interface FormikEffectProps<Values> {
	onChange: (current: FormikContextType<Values>, prev: FormikContextType<Values>) => void;
}

class FormikEffect<Values = any> extends React.Component<FormikEffectProps<Values> & any> {
	componentDidUpdate(prevProps: FormikEffectProps<Values> & { formik: FormikContextType<Values> }) {
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
