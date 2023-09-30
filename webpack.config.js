const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, ''),
        historyApiFallback: true,
        port: 3000
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
            },
            {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
            },
            {
            test: /\.scss$/,
            use: ['style-loader','css-loader','sass-loader']
            },
            {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                loader: 'file-loader',
                },
            ],
            }
        ]
    }
      
}
