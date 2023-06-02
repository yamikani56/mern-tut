const path=require('path')
const webpack=require('webpack')
const CURRENT_WORKING_DIR= process.cwd()

const config={
name:'browser',
mode:'development',
devtool:'eval-source-map',
exntry:[
    "webpack-hot-middleware/client?reload=true",
    path.join(CURRENT_WORKING_DIR,'client/client.js')
],
output:{
    path:path.join(CURRENT_WORKING_DIR,'/dist'),
    filename:'bundle.js',
    publicPath:'/dist'
},
module:{
    rules:[
        {
            test:/\.jsx?$/,
            exclude:/node_modules/,
            user:['babel-loader']
        }
    ]
},plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
],
resolve:{
    alias:{
        'react-dom':'@hot-loader/react-dom'
    }
}
}

module.exports = config