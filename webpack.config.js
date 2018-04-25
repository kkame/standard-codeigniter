const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * TODO - BrowserSync 추가
 * TODO - html-webpack-plugin 적용
 */
module.exports = {
    target: "node",
    entry: {
        app: './resources/app.js'
    },
    output: {
        path: path.join(__dirname, 'htdocs/public'),
        filename: '[name].js',
        publicPath: "/public/",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }, {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },  {
                test: /\.(woff|woff2|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                        }
                    }
                ]
            }, {
                test: /\.(eot|jpe?g|gif|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new webpack.DefinePlugin({
            'global': {}, // bizarre lodash(?) webpack workaround
            'global.GENTLY': false // superagent client fix
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            jquery: 'jquery',
        })
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.scss', '.css'],
    },
};