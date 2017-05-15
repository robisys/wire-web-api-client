module.exports = {
  devServer: {
    contentBase: `${__dirname}/dist`,
    stats: {
      chunks: false,
    }
  },
  entry: `${__dirname}/dist/demo.js`,
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'demo-bundle.js'
  }
};
