require('dotenv').config();

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    webpack: (config) => {
        if (!config.resolve.plugins) {
            config.resolve.plugins = [];
        }

        config.resolve.plugins.push(new TsconfigPathsPlugin());

        return config;
    }
};
