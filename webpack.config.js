let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {
    entry: "./src/index.js", 
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: './dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                  })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("button.css"),
    ]
};

module.exports = config;