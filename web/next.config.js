const withTypescript = require('@zeit/next-typescript') // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = withTypescript({
  target: 'serverless',
});
