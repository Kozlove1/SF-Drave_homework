const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const myEslintOptions = {
    extensions: ["js", "jsx", "ts"],
    exclude: ["node_modules"],
};

// eslint-disable-next-line no-undef
module.exports = {
    stats: {children: true},
    mode: "production",
    entry: "./src/FAQ/FaqNew.js",
    output: {
        filename: "main.js",
    },
    devServer: {
        contentBase: "./dist",
    },
  
    plugins: [
        new ESLintPlugin(myEslintOptions),
        new MiniCssExtractPlugin(),
        new CssMinimizerPlugin(),
        new TerserPlugin(),
        new HtmlWebpackPlugin({
            title: "Development",
            template: "./src/FAQ/FaqNew.pug",
            filename: "FAQ.html"
        }),
        new HtmlWebpackPlugin({
            title: "Development",
            template: "./src/AboutUs/aboutUs.pug",
            filename: "aboutUs.html"
        }),
        new StylelintPlugin(),
    ],

    optimization:{
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
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
 
        ]
    }
};
