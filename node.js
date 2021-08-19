"use strict"
const http = require('http')
const express = require('express')
const port = 5000

const app = express()
//middleware to retreive my static files
app.use(express.static('public'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

//specifically for retreiving my html
app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html' )
})


app.listen(port, () => console.info(`Listening on port ${port}. `))