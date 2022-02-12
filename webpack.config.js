const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill",'./src/index.tsx'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devServer: {
        open: true,
        port: 8080,
    },
    module: {
        rules: [
            {
                test:/\.(css|sass|scss)$/,
                use:["style-loader","css-modules-typescript-loader","css-loader", "sass-loader"]
            },
            {
                test:/\.(jpeg|png)$/,
                use:"file-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env',"@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": ["@babel/preset-typescript"]
                    }

                }
            },
            { test: /\.tsx?$/,
                exclude: /\.test.tsx?$/,
                include: /ClientApp/,
                use: 'awesome-typescript-loader?silent=true'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin(),
        new Dotenv()
    ],
}