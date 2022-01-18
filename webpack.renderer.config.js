const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // Put your normal webpack config below here
  plugins: [
    new SentryWebpackPlugin({
      include: '.webpack/main',
      release: '1.0.0',
    }),
  ]
};
