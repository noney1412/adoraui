const path = require('path');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const dev = process.env.NODE_ENV !== 'production';

const configFilePath = path.resolve(__dirname, 'tsconfig.webpack.json');

const config = {
    mode: dev ? 'development' : 'production',
    watch: process.env.WATCH === 'true',
    devtool: 'source-map',
    entry: {
        adoraui: ['./src/index.ts'],
        'adoraui.min': ['./src/index.ts']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'adoraui',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        plugins: [new TsConfigPathsPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                options: { configFileName: configFilePath },
                exclude: /(node_modules|__tests__)/
            },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    externals: {
        react: {
            root: 'React',
            amd: 'react',
            commonjs2: 'react',
            commonjs: 'react'
        }
    }
};

module.exports = config;
