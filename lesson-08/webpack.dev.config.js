const path = require('path');
const fs = require('fs');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const htmlPages = generateHtmlPlugins('./src/public/pages');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const srcPath = './src/public';
const destPath = path.join(__dirname, 'dist/public')

module.exports = {
    entry: {
        main: ["@babel/polyfill", "./src/public/index.js"]
    },
    output: {
        path: path.join(__dirname, 'dist/public'),
        publicPath: "/",
        filename: "js/[name].js"
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
    },
    target: 'web',
    devtool: "#source-map",
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test:/\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /images[\\\\/].+\.(gif|png|jpe?g|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                    publicPath: '../',
                },
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'src/public/index.html',
            filename: 'index.html',
            excludeChunks: ['server']
        }),
        new CopyPlugin([
            {
                from: srcPath + '/images', to: destPath + '/images',
            },
        ]),
        new VueLoaderPlugin(),
    ],
};

function generateHtmlPlugins (templateDir) {
    // Read files in template directory
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
    return templateFiles.map(item => {
        // Split names and extension
        const parts = item.split('.')
        const name = parts[0]
        const extension = parts[1]
        // Create new HTMLWebpackPlugin with options
        return new HTMLWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
        })
    })
}