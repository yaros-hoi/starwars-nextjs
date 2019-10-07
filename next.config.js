// next.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const withCSS = require('@zeit/next-css');
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const withTypescript = require('@zeit/next-typescript');
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const withOffline = require('next-offline');

// eslint-disable-next-line no-undef
module.exports = withOffline(
  withTypescript(
    withCSS({
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]'
      },
      pageExtensions: ['jsx', 'js', 'ts', 'tsx']
    })
  )
);
