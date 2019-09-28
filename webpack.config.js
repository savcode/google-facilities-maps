const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
const config = require('./src/configuration/map.json');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    externals: {
        config: JSON.stringify(config),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['transform-class-properties'],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new CopyPlugin([
            { from: 'src/data', to: 'data' },
        ]),
        new FlowBabelWebpackPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
};
