/* eslint-disable linebreak-style */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');



module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: {
    faq: './src/FAQ/FaqNew.js',
    abotUs: './src/AboutUs/AboutUs.js',
  },
  devServer: {
    historyApiFallback: false,
    open: true,
    compress: true,
    hot: true,
    port: 3001,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },

  output: {
    asyncChunks: true,
    chunkFilename: '[name].js',
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new CssMinimizerPlugin(),
    new TerserPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'src/FAQ/FaqNew.pug',
      filename: 'faq.html',
      chunks: ['faq'],
    }),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'src/AboutUs/AboutUs.pug',
      filename: 'abotUs.html',
      chunks: ['abotUs'],
    }),
    new StylelintPlugin(),
    new ESLintPlugin(),
  ],

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },

  module: {
    rules: [
      {
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: true,
          },
        }, 'css-loader'],
        test: /\.css$/,
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img',
        },
      },
    ],
  },
};
