const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    Ads: './src/components/Ads.js',
    Favicons: './src/components/Favicons.js',
    Gtm: './src/components/Gtm.js',
    GtmNoScript: './src/components/GtmNoScript.js',
    Vwo: './src/components/Vwo.js',
    WebFont: './src/components/WebFont.js',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    library: '',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ['/node_modules/', '/tests/'],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/react']
        }
      }
    ]
  },
  externals: {
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'PropTypes',
      root: 'PropTypes'
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    },
    'react-helmet': {
      commonjs: 'react-helmet',
      commonjs2: 'react-helmet'
    }
  }
};