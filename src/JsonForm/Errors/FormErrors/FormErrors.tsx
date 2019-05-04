import React from 'react';
import { connect } from 'formik';
import { getComponent } from '@bluebase/core';

const ErrorList = getComponent('ErrorList');

export const FormErrors = connect((props) => {
	const errors = props.formik.errors && props.formik.errors;
	return <ErrorList errors={(errors as any).form || []} />;
});