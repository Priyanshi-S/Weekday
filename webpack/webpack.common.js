const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  output: {
    filename: '[name].b-[contenthash].js',
    path: path.resolve(__dirname, '../build'),
    publicPath: 'auto',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: getAlias(),
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['@babel/env', '@babel/preset-react'] },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|eot|woff|woff2|ttf)$/i,
        type: 'asset/resource', // file-loader
      },
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false, // disable the behaviour
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      base: {
        href: 'http://localhost:4080',
        target: '_blank'
      }
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
};