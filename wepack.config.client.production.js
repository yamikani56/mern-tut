const path=require('path')
const webpack=require('webpack')
const CURRENT_WORKING_DIR= process.cwd()

const config={
    name:"production",
    entry:[path.join(CURRENT_WORKING_DIR,'client/client.js')],
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
                use:[
                    'babel-loader'
                ]
            }
        ]
    }
}

module.exports = config