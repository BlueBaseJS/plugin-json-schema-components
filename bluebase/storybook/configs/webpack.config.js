const { storybookWebpackConfigs } = require('@bluebase/cli-essentials');

module.exports = (baseConfig, env, config) => {

	config = storybookWebpackConfigs({ config });

	return config;
};
