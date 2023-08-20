const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
      page1:'./srs/app.js',
      page2:'./srs/app2.js'
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
            chunks: ['page1']
        }),
        new HTMLPlugin({
          filename: 'statistic.html',
          template: './srs/statistic.html',
          chunks: ['page2']
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