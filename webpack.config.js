module.exports = {
  devServer: {
    contentBase: `${__dirname}/dist`,
    stats: {
      chunks: false,
    }
  },
  entry: `${__dirname}/dist/demo.js`,
  output: {
    filename: 'demo-bundle.js',
    path: `${__dirname}/dist`
  }
};
