var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    loaders: [
        // image loader - https://www.npmjs.com/package/image-webpack-loader
        {
            test: /\.(svg|png)$/,
            loaders: [
                'file?hash=sha512&digest=hex&name=images/[hash].[ext]'
            ]
        },
        // javascript/jsx loader - https://www.npmjs.com/package/babel-loader
        {
            test: /\.js?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader?stage=0&optional=runtime'],
        },
        // styles
        {
            test: /\.[s]?css$/,
            loader: "style!css!autoprefixer-loader?browsers=last 2 version!sass"
        }
    ],
    // https://www.npmjs.com/package/html-webpack-plugin - generate our html file from a template - makes it easier to include custom stuff
    indexPagePlugin: new HtmlWebpackPlugin({
        inject: true,
        title: 'StateOfTheArt',
        filename: 'index.html',
        template: './front/layout.html'
    })
};
