const withOffline = require('next-offline');

const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config

        config.module.rules.push({
            test: /\.wasm$/,
            loader: 'wasm-loader',
        });

        return config;
    },
    webpackDevMiddleware: config => {
        // Perform customizations to webpack dev middleware config
        // Important: return the modified config
        return config;
    },
};

module.exports = withOffline(nextConfig)
