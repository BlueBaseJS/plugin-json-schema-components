import { BlueBase, BlueBaseContext, BlueBaseFilter, MaybeArray } from '@bluebase/core';
import { JsonComponentNode, JsonSchemaParser } from '../lib';
import React from 'react';

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
	testID?: string,
}

const getComponent = (BB: BlueBase) => {
	return ({ component }: JsonComponentNode) => {

		return BB.Components.has(String(component)) ? BB.Components.resolve(String(component)) : null;
	};
};

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
 * <JsonLayout
 * 	filter="content-filter"
 * 	args={{ style: { color: 'blue' } }}
 *  schema={{
 * 	 component: 'Text',
 * 	 props: {
 * 		 style: {
 * 			 color: 'red'
 * 		 }
 * 	 },
 * 	 text: 'This is the page content.',
 *  }
 * } />
 * ```
 */
export class JsonLayout extends React.PureComponent<JsonLayoutProps> {

	static contextType = BlueBaseContext;

	render() {

		const BB: BlueBase = this.context;

		const { filter, schema, args } = this.props;
		const parser = new JsonSchemaParser(getComponent(BB));

		// There's no filter, we don't need to do complex async handling
		if (!filter) {
			return parser.parseSchema(schema);
		}

		const children = (loadedSchema: MaybeArray<JsonComponentNode>) => parser.parseSchema(loadedSchema);

		return (
			<BlueBaseFilter
				filter={filter}
				value={schema}
				args={args}
				children={children}
			/>
		);
	}
}