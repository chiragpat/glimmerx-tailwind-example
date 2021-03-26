const path = require('path');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js', '.gjs', '.gts'],
  },
  entry: {
    app: './src/index.js'
  },
  devtool: false,
  devServer: {
    writeToDisk: true,
  },
  module: {
    rules: [
      {
        test: /(\.ts|\.js|\.gts|\.gjs)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@glimmerx/babel-preset'],
            },
          },
          '@glimmerx/webpack-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader', options: { injectType: 'linkTag' } },
          { loader: 'file-loader' },
          'postcss-loader'
        ],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
}
