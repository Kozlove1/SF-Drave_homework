const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  stats: {children: true},
  mode: "production",
  entry: "./src/FAQ/FaqNew.js",
  output: {
    filename: "main.js",
  },
  
    plugins: [
      new MiniCssExtractPlugin(),
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/FAQ/FaqNew.pug",
        filename: "FAQ.html"
      }),
      new HtmlWebpackPlugin({
        template: "./src/AboutUs/aboutUs.pug",
        filename: "aboutUs.html"
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
          }, "css-loader"],
          test: /\.css$/
        },
        {
          test: /\.pug$/,
          loader: "pug-loader",
          options: {
          pretty: true
				}
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        // {
        //   test:/\.js$/,
        //   exclude: /node_modules/,
        //   use: "eslint-loader"
        // }
      ]
    }
};
