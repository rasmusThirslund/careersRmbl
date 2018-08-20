'use strict';

const merge = require('webpack-merge');
const Path = require('path');
const subpages = require('./webpack.subpages.mergable.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH_DEST = Path.join(__dirname, '../dist');
// const PATH_HTML = Path.join(__dirname, '../public/html');
const PATH_SRC = Path.join(__dirname, '../src');

module.exports = merge(subpages, {

    entry: [
        Path.resolve(__dirname, './polyfills'),
        Path.resolve(__dirname, PATH_SRC + '/scripts/index')
    ],
    output: {
        path: PATH_DEST,
        filename: 'bundle.js' // .[hash].
    },
    plugins: [
        new CleanWebpackPlugin([PATH_DEST]),
        new CopyWebpackPlugin([
            {from: Path.resolve(__dirname, '../public'), to: 'public'}
        ]),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, PATH_SRC + '/index.html')
        }),

// new HtmlWebpackPlugin({
        //     filename: 'components.html',
        //     template: Path.resolve(__dirname, PATH_HTML + '/components.html')
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'objects.html',
        //     template: Path.resolve(__dirname, PATH_HTML + '/objects.html')
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'objects-framework.html',
        //     template: Path.resolve(__dirname, PATH_HTML + '/objects-framework.html')
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'heroes.html',
        //     template: Path.resolve(__dirname, PATH_HTML + '/heroes.html')
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'frontpage-search.html',
        //     template: Path.resolve(__dirname, PATH_HTML + '/frontpage-search.html')
        // }),

    ],
    resolve: {
        alias: {
            '~': Path.resolve(__dirname, PATH_SRC)
        }
    },
    module: {
        rules: [
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            }
        ]
    }
});
