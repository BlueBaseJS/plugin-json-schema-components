import { FormStatusListItemProps } from '../FormStatusListItem/FormStatusListItem';
import React from 'react';
import { getComponent } from '@bluebase/core';

export interface FormStatusListStyles {}

export interface FormStatusListProps {
	items: string[];
	divider?: boolean;
	type?: 'error' | 'success' | 'warning';
	styles?: Partial<FormStatusListStyles>;
}

const FormStatusListItem = getComponent<FormStatusListItemProps>('FormStatusListItem');

export const FormStatusList = ({ items, type }: FormStatusListProps) => {
	if (!items || items.length < 1) {
		return null;
	}

	return (
		<>
			{items.map((status, index) => (
				<FormStatusListItem
					key={index}
					divider={index < items.length - 1}
					type={type}
					testID="FormStatusList-loop"
				>
					{status}
				</FormStatusListItem>
			))}
		</>
	);
};

FormStatusList.defaultProps = {
	type: 'error',
};
