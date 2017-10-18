const path = require('path');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'bundle'),
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }]
            },
        ]
    },
    plugins: [
        new NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            filename: "index.html",
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "bundle")
    }
};