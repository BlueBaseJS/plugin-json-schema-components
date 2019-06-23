const { storybookWebpackConfigs } = require('@bluebase/cli-essentials');

module.exports = ({ config }) => {
	config = storybookWebpackConfigs({ config });

	config.module.rules.push({
		test: /\.js$/,
		exclude: /node_modules[/\\](?!react-native-paper|react-native-vector-icons|react-native-safe-area-view|@bluebase\/plugin-vector-icons\/node_modules\/react-native-vector-icons)/,
		use: {
			loader: 'babel-loader',
			options: {
				// Disable reading babel configuration
				babelrc: false,
				configFile: false,

				presets: ['@bluebase/code-standards/babel.config'],
			},
		},
	});

	return config;
};
