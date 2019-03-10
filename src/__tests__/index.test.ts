import { BlueBase } from '@bluebase/core';
import Plugin from '../plugin';

test('Plugin should be correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);

	expect(BB.Plugins.has('json-schema-components')).toBeTruthy();
});
