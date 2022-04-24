const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");



module.exports = {
    entry: './src/FaqNew.js',
    output: {
        filename: 'main.js'
    },
    mode: 'development',
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: "C:/Users/User/VScode/SF-Drave_homework/src/FAQ.pug"
    }),
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin(),
    ],

    optimization: {
      minimize: true,
      minimizer: [
        new OptimizeCssAssetsWebpackPlugin(),
        new TerserWebpackPlugin(),
        ],
    },
      module: {
        rules: [
          { test: /\.css$/,
           use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: true,
              },
            },
            'css-loader',
       ], },
       {
       test: /\.pug$/,
       loader: 'pug-loader',
       options: {
       pretty: true
       }
      },
        ]
      }
}