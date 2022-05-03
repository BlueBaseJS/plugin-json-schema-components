export function removeUndefinedProperties(inputProps: any) {
	const filteredProps = Object.keys(inputProps).reduce((acc: any, key) => {
		if (inputProps[key] !== undefined) {
			acc[key] = inputProps[key];
		}

		return acc;
	}, {});

	return filteredProps;
}
