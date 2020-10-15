import { JsonLayout, JsonLayoutProps } from './JsonLayout';

import React from 'react';

export const createJsonLayout = (options: JsonLayoutProps) => {
	const Component = () => (<JsonLayout {...options} />);
	Component.displayName = 'JsonLayoutWrapper';

	return Component;
};
