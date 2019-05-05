import { BlueBase, BlueBaseContext, getComponent } from '@bluebase/core';
import { FetchResult, MutationFn, MutationProps, QueryProps } from 'react-apollo';
import { FormikActions, FormikValues } from 'formik';
import { ApolloError } from 'apollo-client';
import { JsonFormProps } from '../JsonForm';
import React from 'react';

const JsonForm = getComponent<JsonFormProps>('JsonForm');
const Mutation = getComponent<MutationProps>('GraphqlMutation');

export type mapFormValuesToMutationVariablesFn<Values = any> = (values: Values) => any;

export interface JsonGraphqlFormProps<Values = FormikValues> extends JsonFormProps<Values> {

	/**
	 * GraphqlMutation component props. This mutation will be executed when
	 * a form is submitted.
	 */
	mutation: MutationProps<any, Values>;

	/**
	 * A function that converts form values to mutation variables.
	 * By default values are sent as is to the mutation.
	 */
	mapFormValuesToMutationVariables?: mapFormValuesToMutationVariablesFn;

	/**
	 * GraphqlQuery component props. The result of this query will be used
	 * as initial values of the form.
	 */
	query?: QueryProps;

	/**
	 * A function that converts query result to initial form values.
	 * By detault the result is assumed to be initial values, as is.
	 */
	mapQueryDataToInitialValues?: (data: any) => Values;

	onError?: (error: ApolloError) => void;
	onSuccess?: (result: void | FetchResult, values: Values, actions: FormikActions<Values>) => void;
}

export class JsonGraphqlForm<Values = FormikValues> extends React.PureComponent<JsonGraphqlFormProps<Values>> {

	static contextType = BlueBaseContext;

	static defaultProps: Partial<JsonGraphqlFormProps> = {
		mapFormValuesToMutationVariables: (v: any) => v,
		onError: () => { return; },
		onSuccess: () => { return; },
	};

	constructor(props: JsonGraphqlFormProps<Values>) {
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
	}

	public render() {

		const {
			mutation,
			mapFormValuesToMutationVariables,
			query,
			mapQueryDataToInitialValues,
			schema,
			...rest
		} = this.props;

		return (

			<Mutation {...mutation}>
			{(mutate: MutationFn) => (
				<JsonForm
					{...rest}
					schema={{
						...schema,
						onSubmit: this.onSubmit(mutate),
					}}
				/>
			)}
			</Mutation>
		);
	}

	protected onSubmit(mutate: MutationFn) {

		const BB: BlueBase = this.context;
		const { onError, onSuccess } = this.props;

		const mapFormValuesToMutationVariables =
			this.props.mapFormValuesToMutationVariables as mapFormValuesToMutationVariablesFn;

		return (values: Values, actions: FormikActions<Values>) => {

			const { setSubmitting, setErrors } = actions;
			const variables = mapFormValuesToMutationVariables(values);

			mutate({ variables })
			.then(
				(result) => {
					setSubmitting(false);

					if (onSuccess) {
						onSuccess(result, values, actions);
					}
				},
				(error: ApolloError) => {
					setSubmitting(false);
					setErrors(graphqlToFormErrors(error) as any);

					if (error.networkError) {
						BB.Logger.error('JsonGraphQLForm Network Error', { error, values });
					}

					if (onError) {
						onError(error);
					}
				}
			);
		};
	}
}

type FormErrors = { form: string[] } & { [key: string]: string };

const graphqlToFormErrors = (error: ApolloError) : FormErrors => {

	let errors: any = {
		form: []
	};

	if (error.graphQLErrors) {
		error.graphQLErrors.forEach((e: any) => {

			if (e.extensions && e.extensions.code === 'BAD_USER_INPUT') {
				const fieldErrors = e.extensions.exception.validationErrors;

				errors = {
					...errors,
					...fieldErrors,
				};
			}
			else {
				errors.form.push(e.message);
			}
		});
	}

	if (error.networkError) {
		// tslint:disable-next-line: max-line-length
		errors.form.push('A network error occurred. This may be because of your network connection, or a server error. Please try again later.');
	}

	return errors;
};