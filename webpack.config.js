var config = {

  devtool: 'eval',
  debug: true,

  output: {
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /(node_modules)/, loaders: ['babel', 'esprima-loader'] }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
}

module.exports = config;
