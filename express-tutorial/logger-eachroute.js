const express = require('express')
const logger = require('./logger-middleware')
const app = express()

// req=> middleware => res

app.get('/',logger,(req,res)=>{
    res.send('Home')
})

app.get('/about',logger,(req,res)=>{
    res.send('About')
})