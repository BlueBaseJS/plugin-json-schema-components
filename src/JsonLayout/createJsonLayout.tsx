import React from 'react';

import { JsonLayout, JsonLayoutProps } from './JsonLayout';

export const createJsonLayout = (options: JsonLayoutProps) => {
	const Component = () => (<JsonLayout {...options} />);
	Component.displayName = 'JsonLayoutWrapper';

	return Component;
};
