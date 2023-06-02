import express from 'express'
import path from 'path'
import {MongoClient} from 'mongodb'

import template from '../template'
import devBundle from './devBundle'

const CURRENT_WORKING_DIR=process.cwd()
const app =express()
devBundle.compile(app)
const port = process.env.PORT || 3000
const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/mernTut'

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },(err,db)=>{
    console.log("connected sucessfully to mongodb server")
    db.close()
})


app.use('./dist',express.static(path.join(CURRENT_WORKING_DIR,'dist')))

app.get('/',(req,res)=>{
    res.status(200).send(template())
})

app.listen(port,function onStart(err){
    if(err){
        console.log(err)
    }
    console.info('server started on port %s.',port)
})