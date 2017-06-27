const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  devServer: {
    stats: {
      chunks: false,
    }
  },
  entry: {
    demo: `${__dirname}/src/js/demo.js`,
    client: `${__dirname}/dist/commonjs/Client.js`,
    test: `${__dirname}/src/test/index.js`,
  },
  output: {
    path: `${__dirname}/dist`,
    filename: `[name].js`,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      cache: true,
      excludeChunks: ['test'],
      filename: 'index.html',
      hash: true,
      template: `${__dirname}/src/template/index.ejs`,
      title: 'Demo',
    }),
  ]
};
