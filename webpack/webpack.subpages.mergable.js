'use strict';


// const merge = require('webpack-merge');
const Path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const PATH_DEST = Path.join(__dirname, '../dist');
// const PATH_SRC = Path.join(__dirname, '../src');
const PATH_HTML = Path.join(__dirname, '../public/html');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'components.html',
            template: Path.resolve(__dirname, PATH_HTML + '/components.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'objects.html',
            template: Path.resolve(__dirname, PATH_HTML + '/objects.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'objects-framework.html',
            template: Path.resolve(__dirname, PATH_HTML + '/objects-framework.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'heroes.html',
            template: Path.resolve(__dirname, PATH_HTML + '/heroes.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'frontpage-search.html',
            template: Path.resolve(__dirname, PATH_HTML + '/frontpage-search.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'searchpage.html',
            template: Path.resolve(__dirname, PATH_HTML + '/searchpage.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'demo-page-content-left-menu.html',
            template: Path.resolve(__dirname, PATH_HTML + '/demo-page-content-left-menu.html')
        }),


    ]

};

