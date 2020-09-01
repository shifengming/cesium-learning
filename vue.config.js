const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const debug = process.env.NODE_ENV !== 'production'

//定义cesium源码路径
let cesiumSource = './node_modules/cesium/Source'
let cesiumWorkers = '../Build/Cesium/Workers'

module.exports = {
    publicPath: '',
    devServer: {
        port: 8081 //修改服务端口号
    },
    outputDir: 'docs', //设置 build 输出目录
    configureWebpack: {
        output: {
            sourcePrefix: ' ' //让webpack正确处理多行字符串
        },
        amd: {
            toUrlUndefined: true
        },
        resolve: {
            alias: {    
			//在resolve中设置cesium别名，
			//这样在引入的时候就可以根据别名找到Cesium的包
                'vue$': 'vue/dist/vue.esm.js',
                '@': path.resolve('src'),
                'cesium': path.resolve(__dirname, cesiumSource)
            }
        },
        plugins: [
            new CopyWebpackPlugin([ { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers'}]),
            new CopyWebpackPlugin([ { from: path.join(cesiumSource, 'Assets'), to: 'Assets'}]),
            new CopyWebpackPlugin([ { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets'}]),
            new CopyWebpackPlugin([ { from: path.join(cesiumSource, 'ThirdParty/Workers'), to: 'ThirdParty/Workers'}]),
            new webpack.DefinePlugin({
             //定义 Cesium 从哪里加载资源，如果使用默认的''，
             //却变成了绝对路径了，所以这里使用'./',使用相对路径
                CESIUM_BASE_URL: JSON.stringify('./')
            })
        ],
        module: {
            unknownContextCritical: /^.\/.*$/,
            unknownContextCritical: false
        }
    }
}
