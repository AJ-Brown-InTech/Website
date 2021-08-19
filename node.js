"use strict"
const http = require('http')
const express = require('express')
const port = 5000

const app = express()
//middleware to retreive my
app.use(express.static('public'))
app.use('/Images', express.static(__dirname + 'public/Images'))
app.use('/css', express.static(__dirname + 'public/style.css'))
app.use('/js', express.static(__dirname + 'public/main.js'))

app.get('/', (req, res) => {
    res.sendFile('index')
})


app.listen(port, () => console.info(`Listening on port ${port}. `))