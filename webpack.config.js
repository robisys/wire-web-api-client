module.exports = {
  devtool: 'cheap-module-source-map',
  devServer: {
    stats: {
      chunks: false,
    }
  },
  entry: {
    demo: `${__dirname}/src/demo/demo.js`,
    client: `${__dirname}/dist/commonjs/Client.js`,
    test: `${__dirname}/src/test/index.js`,
  },
  output: {
    path: `${__dirname}/dist`,
    filename: `[name].js`,
    publicPath: '/',
  }
};
