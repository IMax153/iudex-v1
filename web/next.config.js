const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');
const withTypescript = require('@zeit/next-typescript');

// Fixes npm packages that depend on `fs` module
const nextConfig = { target: 'serverless', webpack: config => ({ ...config, node: { fs: 'empty' } }) };

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withCSS = require('@zeit/next-css');
    return withCSS(withTypescript(nextConfig));
  }

  return withTypescript(nextConfig);
};
