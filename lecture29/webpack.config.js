const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    // plugins: [new MiniCssExtractPlugin({
    //     filename: "[name].css",
    //     chunkFilename: "[id].css",
    // })],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};
