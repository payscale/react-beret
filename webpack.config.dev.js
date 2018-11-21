module.exports = {
  mode: 'development',
  entry: {
    'dev-server': 'webpack-dev-server/client?http://0.0.0.0:3000',
    'hot': 'webpack/hot/only-dev-server',
    'example': './examples/index.js'
  },
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
