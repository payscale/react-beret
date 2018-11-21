module.exports = {
  mode: 'development',
  entry: {},
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
    publicPath: 'http://localhost:8080/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: ['/node_modules/', '/tests/']
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    https: false
  },
  devtool: 'inline-source-map'
};
