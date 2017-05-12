const pkg = require('./package.json');
const projectName = require('./bower.json').name;
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: `${__dirname}/dist/commonjs/index.js`
  },
  externals: {
    'axios': true
  },
  output: {
    filename: `${projectName}.js`,
    library: 'WireAPIClient',
    path: `${__dirname}/dist/window`
  },
  plugins: [
    new webpack.BannerPlugin(`${projectName} v${pkg.version}`)
  ],
  performance: {
    maxAssetSize: 100,
    maxEntrypointSize: 300,
    hints: 'warning'
  },
  resolve: {
    aliasFields: []
  }
};
