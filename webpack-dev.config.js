var commonConfig = require('./webpack-common.config.js');

var devLoaders = [
    // javascript/jsx loader - https://www.npmjs.com/package/babel-loader - with the react-hot loader
    {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader?stage=0&optional=runtime'],
    }
];

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './front/main.js'
    ],
    output: {
        path: './build',
        filename: 'bundle.[hash].js'
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
        // proxy calls to api to our own node server backend
        proxy: {
            '/api/*': 'http://localhost:3000/'
        }
    },
    module: {
        loaders: commonConfig.loaders.concat(devLoaders)
    },
    plugins: [
        commonConfig.indexPagePlugin
    ]
};