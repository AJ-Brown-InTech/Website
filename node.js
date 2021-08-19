"use strict"
const http = require('http')
const express = require('express')
const port = 5000

const app = express()

app.listen(port, () =>{
    console.info(`Listening on port ${port}. `)
})
