var config = {
    entry: './src/index',

    output: {
        path: './',
        filename: 'index.js'
    },

    devServer: {
        inline: true,
        port: 8080,
        historyApiFallback: true,
        contentBase:'./src'
    },

    module: {
        loaders: [
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader'
            }
    ]}
};

module. exports = config;