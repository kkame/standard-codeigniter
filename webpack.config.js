const path = require('path');
const webpack = require('webpack');
const ExtraTextWebpackPlugin = require('extract-text-webpack-plugin');
const WebpackNodeExternals = require('webpack-node-externals');

module.exports = {
    target: "node",
/*    externals: [WebpackNodeExternals()],*/
    entry: {
        app: './resources/app.js'
    },
    output: {
        path: path.join(__dirname, 'htdocs/public'),
        filename: '[name].js',
        publicPath: "/",
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
                use: ['style-loader', 'css-loader'],
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
        new ExtraTextWebpackPlugin({
            filename: '[name].css',
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