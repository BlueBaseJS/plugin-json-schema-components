import React from 'react';
import { connect } from 'formik';
import { getComponent } from '@bluebase/core';

const FormStatusList = getComponent('FormStatusList');

export const FormStatus = connect((props) => {
	const errors = props.formik.errors && (props.formik.errors as any).form;
	const warnings = props.formik.status && (props.formik.status as any).warnings;
	const success = props.formik.status && (props.formik.status as any).success;

	return (
		<React.Fragment>
			<FormStatusList type="success" items={success || []} />
			<FormStatusList type="warning" items={warnings || []} />
			<FormStatusList type="error" items={errors || []} />
		</React.Fragment>
	);
});