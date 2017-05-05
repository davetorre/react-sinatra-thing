module.exports = {
  entry: './src/app.js',
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  output: {
    filename: './public/bundle.js'
  }
}
