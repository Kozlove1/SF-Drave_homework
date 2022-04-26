const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
    entry: './src/FaqNew.js',
    output: {
        filename: 'main.js'
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: './src/FAQ.pug',
        filename: 'FAQ.html'

      }),


    ],
    optimization:{
      minimize: true,
      minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin()]
    },
    module: {
      rules:[
        {
          use: [{
            loader: MiniCssExtractPlugin.loader,
            options:{
              esModule: true,
            }
          }, 'css-loader'],
          test: /\.css$/
        },
        {
          test:/\.pug$/,
          use: 'pug-loader'
        }


      ]
    }
};
