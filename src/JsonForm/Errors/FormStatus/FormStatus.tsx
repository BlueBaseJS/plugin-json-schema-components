import React from 'react';
import { connect } from 'formik';
import { getComponent } from '@bluebase/core';

const FormStatusList = getComponent('FormStatusList');

export interface IProps {
	errors :any,
	status :any,
	formik:any,
}

export const FormStatus = connect((props:IProps) => {
	const errors = props.formik.errors && (props.formik.errors.form)
	const warnings = props.formik.status && (props.formik.status.warnings)
	 const success = props.formik.status && (props.formik.status.success);

	return (
		<React.Fragment>
			<FormStatusList type="success" items={success || []} />
			<FormStatusList type="success" items={warnings || []} />
			<FormStatusList type="error" items={errors || []} />
		</React.Fragment>
	);
});