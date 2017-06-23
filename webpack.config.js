module.exports = {
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: `${__dirname}/dist`,
    stats: {
      chunks: false,
    }
  },
  entry: {
    demo: `${__dirname}/dist/demo.js`,
    client: `${__dirname}/dist/commonjs/Client.js`,
    test: `${__dirname}/src/test/index.js`,
  },
  output: {
    path: `${__dirname}/dist`,
    filename: `[name].js`,
    publicPath: '/',
  }
};
