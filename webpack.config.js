var webpack = require('webpack');
var path = require('path');

const sassLoader = 'style-loader!css-loader?modules&importLoaders&localIdentName=[name]__[local]__[hash:base64:5]!sass-loader?sourceMap=true&sourceMapContents=true';


module.exports = {
    mode: "development", 
    devtool: 'cheap-module-eval-source-map',
    entry:
    {
        'index':['./client/index.js'],
        'tabs':['./client/component/tab/app.js'],
    },
    output: {
        path: path.join(__dirname, 'tmp/'),  //这儿好像没起作用
        filename: '[name].js', //输出文件名，[name].js默认是main.js。如果指定则是指定名
        publicPath: '/tmp/', //这个一定得注意，之前我写tmp/，导致一直找不到js文件路劲
        chunkFilename: "[chunkhash].js"
    },
    module: {
        rules:[
             {

                test: /\.js|\.jsx$/,
                include: [
                    path.join(__dirname, 'client'),
                    path.join(__dirname, 'client',"scripts"),
                    path.join(__dirname, "client","component","tab"),
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: "babel-loader",
                options: {
                    presets: ['react','es2015']
                },
             },
             {
                test: /\.css$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: sassLoader
             },
             {
                test: /\.json?$/,
                loader: 'json'
             },
             {
                test: /\.scss$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: 'style-loader!css-loader!sass-loader?sourceMap=true&sourceMapContents=true'  
             },
             {
                test: /\.html$/,
                use: [
                    "htmllint-loader",
                    {
                        loader: "html-loader",
                        options: {
                        }
                    }
                ]
            }

        ]  //end rules    
    },
     resolve: {
        alias: {
            'react': path.join(__dirname,'node_modules','react')
        },
        extensions: [".js", ".json", ".jsx", ".css", ".scss"],
    },
     performance: {
        hints:  false, // enum
        maxAssetSize: 200000, // int (in bytes),
        maxEntrypointSize: 400000, // int (in bytes)
    },

    plugins: [
        // new webpack.HotModuleReplacementPlugin()
    ]
    // watch: true //这意味着在初始构建之后，webpack将继续监视任何已解析文件的更改。手表模式默认关闭
    
};

