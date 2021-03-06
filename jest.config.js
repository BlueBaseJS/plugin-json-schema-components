const configs = require('@bluebase/code-standards/jest.config');

const modules = [
	'@unimodules/.*',
	'expo',
	'react-native',
	'react-router-native',
	'react-navigation-stack',
	'react-navigation',
	'react-native-gesture-handler',
	'rn-placeholder',
	'react-native-modal-datetime-picker',
	'unimodules-permissions-interface',
	'@react-native-community/datetimepicker',
].join('|');

module.exports = Object.assign(configs, {
	preset: 'jest-expo',
	testRegex: undefined,

	transformIgnorePatterns: [`/node_modules/(?!${modules})`],
	setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
});
