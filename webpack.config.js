const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ] 
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=80000"
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    }]
  },

  devtool: 'cheap-module-eval-suurce-map',

  devServer: {
    contentBase: path.join(__dirname,'public'),
    historyApiFallback: true
  },
};