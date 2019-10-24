const withOffline = require("next-offline");
const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    /**
        Note: we provide webpack above so you should not `require` it
        Perform customizations to webpack config
        Important: return the modified config
    */

    config.module.rules.push(
      {
        test: /\.wasm$/,
        loader: "wasm-loader"
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            name: "[name].[ext]"
          }
        }
      }
    );

    return config;
  },
  webpackDevMiddleware: config => {
    /**
        Perform customizations to webpack dev middleware config
        Important: return the modified config
    */

    return config;
  }
};

module.exports = withPlugins(
  [
      withCSS,
    //   { cssModules: true }
    ],
  withOffline(nextConfig)
);
