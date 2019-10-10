import { BlueBase, BlueBaseContext, Omit, getComponent } from '@bluebase/core';
import { FetchResult, MutationFn, MutationProps, QueryProps, QueryResult } from 'react-apollo';
import { FormikActions, FormikContext, FormikValues } from 'formik';
import { JsonFormProps, JsonFormSchema } from '../JsonForm';

import { ApolloError } from 'apollo-client';
import React from 'react';
import { StatefulComponent } from '@bluebase/components';

const JsonForm = getComponent<JsonFormProps<any>>('JsonForm');
const Mutation = getComponent<MutationProps>('GraphqlMutation');
const Query = getComponent<QueryProps>('GraphqlQuery');

export type mapFormValuesToMutationVariablesFn<Values extends FormikValues> = (
	values: Values
) => any;
export type mapQueryDataToInitialValuesFn<Values extends FormikValues> = (data: any) => Values;

export type JsonGraphqlFormOnErrorFn<Values extends FormikValues> = (
	error: ApolloError,
	values: Values,
	actions: FormikActions<Values>
) => void;
export type JsonGraphqlFormOnSuccessFn<Values extends FormikValues> = (
	result: void | FetchResult,
	values: Values,
	actions: FormikActions<Values>
) => void;

export type JsonGraphqlFormProps<Values extends FormikValues> = Omit<
	JsonFormProps<Values>,
	'schema'
> & {
	/** JSON Schema. */
	schema: Partial<JsonFormSchema<Values>>;

	/**
	 * GraphqlMutation component props. This mutation will be executed when
	 * a form is submitted.
	 */
	mutation: Omit<MutationProps<any, Values>, 'children'>;

	/**
	 * A function that converts form values to mutation variables.
	 * By default values are sent as is to the mutation.
	 */
	mapFormValuesToMutationVariables?: mapFormValuesToMutationVariablesFn<Values>;

	/**
	 * GraphqlQuery component props. The result of this query will be used
	 * as initial values of the form.
	 */
	query?: Omit<QueryProps<any, Values>, 'children'>;

	/**
	 * A function that converts query result to initial form values.
	 * By detault the result is assumed to be initial values, as is.
	 */
	mapQueryDataToInitialValues?: (data: any) => Values;

	onError?: JsonGraphqlFormOnErrorFn<Values>;

	onSuccess?: JsonGraphqlFormOnSuccessFn<Values>;
};

/**
 * A JsonForm that is compatible with GraphQL APIs. This means it will
 * fetch initial data from a GraphQL query and execute a mutation on form
 * submission.
 */
export class JsonGraphqlForm<Values extends FormikValues> extends React.PureComponent<
	JsonGraphqlFormProps<Values>
> {
	static contextType: React.Context<BlueBase> = BlueBaseContext;

	static defaultProps: Partial<JsonGraphqlFormProps<any>> = {
		mapFormValuesToMutationVariables: (v: any) => v,
		onError: () => {
			return;
		},
		onSuccess: () => {
			return;
		},
	};

	constructor(props: JsonGraphqlFormProps<Values>) {
		super(props);

		this.renderForm = this.renderForm.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	public render() {
		const { query } = this.props;
		const mapQueryDataToInitialValues = this.props
			.mapQueryDataToInitialValues as mapQueryDataToInitialValuesFn<Values>;

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
							fields: schema.fields || [],
							initialValues: schema.initialValues!,
							onChange: this.onChange(mutate),
							onSubmit: this.onSubmit(mutate),
						}}
					/>
				)}
			</Mutation>
		);
	}

	/**
	 * Returns the onChange event handler (this function is not the handler itself).
	 * @param mutate
	 */
	protected onChange(mutate: MutationFn) {
		const onChange = this.props.schema && this.props.schema.onChange;

		if (!onChange) {
			return;
		}

		// The onChange handler
		return (current: FormikContext<Values>, prev: FormikContext<Values>) => {
			onChange(current, prev, mutate);
		};
	}

	/**
	 * Returns the onSubmit event handler (this function is not the handler itself).
	 * @param mutate
	 */
	protected onSubmit(mutate: MutationFn) {
		const BB: BlueBase = this.context;

		const mapFormValuesToMutationVariables = this.props
			.mapFormValuesToMutationVariables as mapFormValuesToMutationVariablesFn<Values>;

		const onError = this.props.onError as JsonGraphqlFormOnErrorFn<Values>;
		const onSuccess = this.props.onSuccess as JsonGraphqlFormOnSuccessFn<Values>;

		// The onSubmit handler
		return (values: Values, actions: FormikActions<Values>) => {
			const { setSubmitting, setErrors } = actions;

			// map values
			const variables = mapFormValuesToMutationVariables(values);

			// Mutate
			mutate({ variables }).then(
				result => {
					// Mutation was successful
					setSubmitting(false);

					// If there was an onSuccess param, call it
					onSuccess(result, values, actions);
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
					onError(error, values, actions);
				}
			);
		};
	}
}

type FormErrors = { form: string[] } & { [key: string]: string };

const graphqlToFormErrors = (error: ApolloError): FormErrors => {
	let errors: any = {
		form: [],
	};

	error.graphQLErrors.forEach((e: any) => {
		if (e.extensions && e.extensions.code === 'BAD_USER_INPUT') {
			const fieldErrors = e.extensions.exception.validationErrors;

			errors = {
				...errors,
				...fieldErrors,
			};
		} else {
			errors.form.push(e.message);
		}
	});

	if (error.networkError) {
		errors.form.push(
			// tslint:disable-next-line: max-line-length
			'A network error occurred. This may be because of your network connection, or a server error. Please try again later.'
		);
	}

	return errors;
};
