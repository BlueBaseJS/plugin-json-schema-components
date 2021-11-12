/**
 * Initial code take from https://github.com/TechniqueSoftware/react-json-schema
 */
import { MaybeArray } from '@bluebase/core';
import isNil from 'lodash.isnil';
import isString from 'lodash.isstring';
import React from 'react';

export interface JsonComponentNode {
	component: string | React.ComponentType<any>;
	text?: string;
	props?: {
		[key: string]: any;
		key?: string;
	};
	children?: JsonComponentNode[];
	name?: string;
}

export type ResolveComponentFn = (node: JsonComponentNode) => React.ComponentType<any> | null;

export class JsonSchemaParser {
	constructor(private getComponent: ResolveComponentFn = () => null) {
		//
	}

	parseSchema(schema: MaybeArray<JsonComponentNode>): MaybeArray<React.ReactElement<any>> {
		if (Array.isArray(schema)) {
			return this.parseSubSchemas(schema);
		}

		return this.createComponent(schema);
	}

	parseSubSchemas(subSchemas: JsonComponentNode[] = []): Array<React.ReactElement<any>> {
		const Components: Array<React.ReactElement<any>> = [];
		let index = 0;
		let subSchema;

		for (subSchema of subSchemas) {
			subSchema.props = subSchema.props || {};
			subSchema.props.key = subSchema.props.key || String(index);
			const Component = this.parseSchema(subSchema) as React.ReactElement<any>;
			Components.push(Component);
			index++;
		}

		return Components;
	}

	createComponent(node: JsonComponentNode): React.ReactElement<any> {
		const { text, props, component } = node;

		if (isNil(component)) {
			throw Error(
				'Could not parse React JSON Schema. Reason: "component" property is required, but not given.'
			);
		}

		const Component = this.resolveComponent(node);
		const Children = text || this.resolveComponentChildren(node);

		return React.createElement(Component, props, Children);
	}

	resolveComponent(node: JsonComponentNode): React.ComponentType<any> {
		const { component } = node;

		// component is already a react component
		if (!isString(component) && component === Object(component)) {
			return component;
		}

		const Component = this.getComponent(node);

		if (!Component) {
			throw Error(
				`Could not parse React JSON Schema. Reason: Could not resolve component: ${component}.`
			);
		}

		return Component;
	}

	resolveComponentChildren({
		children,
	}: JsonComponentNode): MaybeArray<React.ReactElement<any>> | undefined {
		return !isNil(children) ? this.parseSchema(children) : undefined;
	}
}
