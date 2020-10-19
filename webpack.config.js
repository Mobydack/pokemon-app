import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

export default ({ mode }) => ({
    mode,
    entry: {
        index: './src/index.ts',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: 'node_modules',
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: mode === 'development',
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: mode === 'development',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.scss'],
        modules: [
            path.resolve(__dirname, './src'),
            path.resolve(__dirname, 'node_modules'),
        ],
    },
    devServer: {
        port: 3000,
        writeToDisk: true,
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
        }),
    ],
});
