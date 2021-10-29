import { BlueBaseFilter } from '@bluebase/components';
import { BlueBase, MaybeArray, useBlueBase } from '@bluebase/core';
import React from 'react';

import { JsonComponentNode, JsonSchemaParser } from '../lib';

export interface JsonLayoutProps {
	/** JSON Schema. */
	schema: MaybeArray<JsonComponentNode>;

	/** Event name to filter this schema. If this is not provided, the schema is not filtered. */
	filter?: string;

	/** Arguments for the filter. */
	args?: { [key: string]: any };

	/**
	 * Used to locate this view in end-to-end tests.
	 */
	testID?: string;
}

function getComponent(BB: BlueBase) {
	return ({ component }: JsonComponentNode) => {
		const name = String(component);

		// FIXME: Nasty error in production mode,
		// View is RCTView. Find a more elegant solution in future.
		if (name === 'RCTView') {
			return BB.Components.resolveFromCache('View');
		}

		if (!BB.Components.has(name)) {
			return null;
		}

		return BB.Components.resolveFromCache(name);
	};
}

// tslint:disable: jsdoc-format
/**
 * # 🍱 JsonLayout
 *
 * Renders a Component based on JSON schema. This allows developers to create dynamic
 * layouts in their apps, and even save the schema to databases.
 *
 * Moreover, it also makes that schema filter-able. So that any plugin can modify that schema
 * on runtime.
 *
 * ## Usage:
 * ```jsx
<JsonLayout
	filter="content-filter"
	args={{ style: { color: 'blue' } }}
 schema={{
	 component: 'Text',
	 props: {
		 style: {
			 color: 'red'
		 }
	 },
	 text: 'This is the page content.',
 }
} />
 * ```
 */
export const JsonLayout: React.FunctionComponent<JsonLayoutProps> = (props: JsonLayoutProps) => {
	const BB = useBlueBase();
	const { filter, schema, args } = props;

	const parser = new JsonSchemaParser(getComponent(BB));

	// There's no filter, we don't need to do complex async handling
	if (!filter) {
		return parser.parseSchema(schema) as React.ReactElement;
	}

	const children = (loadedSchema: MaybeArray<JsonComponentNode>) =>
		parser.parseSchema(loadedSchema);

	return (
		<BlueBaseFilter filter={filter} value={schema} args={args}>
			{children}
		</BlueBaseFilter>
	);
};

JsonLayout.displayName = 'JsonLayout';
