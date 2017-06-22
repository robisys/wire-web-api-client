module.exports = {
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: `${__dirname}/dist`,
    stats: {
      chunks: false,
    }
  },
  entry: {
    'demo-bundle': `${__dirname}/dist/commonjs/Client.js`,
    test: `${__dirname}/src/test/index.js`,
  },
  output: {
    filename: `dist/[name].js`,
    publicPath: '/',
  }
};
