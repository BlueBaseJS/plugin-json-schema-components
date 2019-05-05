import { BlueBase, BlueBaseContext, getComponent } from '@bluebase/core';
import { FetchResult, MutationFn, MutationProps, QueryProps, QueryResult } from 'react-apollo';
import { FormikActions, FormikValues } from 'formik';
import { JsonFormProps, JsonFormSchema } from '../JsonForm';
import { ApolloError } from 'apollo-client';
import React from 'react';
import { StatefulComponent } from '@bluebase/components';

const JsonForm = getComponent<JsonFormProps>('JsonForm');
const Mutation = getComponent<MutationProps>('GraphqlMutation');
const Query = getComponent<QueryProps>('GraphqlQuery');

export type mapFormValuesToMutationVariablesFn<Values = any> = (values: Values) => any;
export type mapQueryDataToInitialValuesFn<Values = any> = (data: any) => Values;

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

/**
 * A JsonForm that is compatible with GraphQL APIs. This means it will
 * fetch initial data from a GraphQL query and execute a mutation on form
 * submission.
 */
export class JsonGraphqlForm<Values = FormikValues> extends React.PureComponent<JsonGraphqlFormProps<Values>> {

	static contextType = BlueBaseContext;

	static defaultProps: Partial<JsonGraphqlFormProps> = {
		mapFormValuesToMutationVariables: (v: any) => v,
		onError: () => { return; },
		onSuccess: () => { return; },
	};

	constructor(props: JsonGraphqlFormProps<Values>) {
		super(props);

		this.renderForm = this.renderForm.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	public render() {

		const { query } = this.props;
		const mapQueryDataToInitialValues = this.props.mapQueryDataToInitialValues as mapQueryDataToInitialValuesFn;

		// If there is now query, we don't need to fetch initial data
		if (!query) {

			// Just render the form as is
			return this.renderForm();
		}

		// If mapQueryDataToInitialValues function returns data,
		// then obviously isEmpty should return false.
		const isEmpty = (props: any) => !mapQueryDataToInitialValues(props.data);

		return (
			<Query {...query}>
			{(result: QueryResult) => (
				<StatefulComponent {...result} isEmpty={isEmpty}>
					{this.renderForm(mapQueryDataToInitialValues(result.data))}
				</StatefulComponent>
			)}
			</Query>
		);

	}

	/**
	 * Renders the main form that executes a mutation on submit
	 * @param initialValues
	 */
	protected renderForm(initialValues?: JsonFormSchema<Values>['initialValues']) {
		const {
			mutation,
			mapFormValuesToMutationVariables,
			query,
			mapQueryDataToInitialValues,
			schema: _schema,
			...rest
		} = this.props;

		const schema = _schema;

		// If theres an initialValues param, set it in the schema
		if (initialValues) {
			schema.initialValues = initialValues;
		}

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

	/**
	 * Returns the onSubmit event handler (this function is not the handler itself).
	 * @param mutate
	 */
	protected onSubmit(mutate: MutationFn) {

		const BB: BlueBase = this.context;
		const { onError, onSuccess } = this.props;

		const mapFormValuesToMutationVariables =
			this.props.mapFormValuesToMutationVariables as mapFormValuesToMutationVariablesFn;

		// The onSubmit handler
		return (values: Values, actions: FormikActions<Values>) => {

			const { setSubmitting, setErrors } = actions;

			// map values
			const variables = mapFormValuesToMutationVariables(values);

			// Mutate
			mutate({ variables })
			.then(
				(result) => {

					// Mutation was successful
					setSubmitting(false);

					// If there was an onSuccess param, call it
					if (onSuccess) {
						onSuccess(result, values, actions);
					}
				},
				(error: ApolloError) => {

					// Bummer! Mutation was not successful
					setSubmitting(false);

					// Set form errors
					setErrors(graphqlToFormErrors(error) as any);

					// If there was a networkError, tell BlueBase, so other plugins
					// can catch and report it.
					if (error.networkError) {
						BB.Logger.error('JsonGraphQLForm Network Error', { error, values });
					}

					// If there was an onError param, call it
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