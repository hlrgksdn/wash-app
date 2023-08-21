const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
      page1:'./srs/app.js',
    },
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'public'),
        assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './srs/index.html',
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(html)$/,
            use: ['html-loader'],
          },
        ],
      },
}