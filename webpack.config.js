var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/mission.scss'],
    output: {
        filename: 'dist/mission.css'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader?importLoaders=1',
                }),
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'dist/mission.css',
            allChunks: true,
        }),
    ],
};
