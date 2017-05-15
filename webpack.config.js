module.exports = {
  devServer: {
    contentBase: `${__dirname}/dist`,
    stats: {
      chunks: false,
    }
  },
  entry: `${__dirname}/dist/demo.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'demo-bundle.js'
  }
};
