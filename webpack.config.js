module.exports = {
  mode: 'development',
  entry: "./jsx/app.jsx",
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  devtool: '#sourcemap',
  stats: {
    colors: true,
    reasons: true
  },
  devServer: {
    contentBase: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  }
}