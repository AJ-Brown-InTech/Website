//imports
"use strict"
const express = require('express')
const port = 5000
const app = express()

//middleware to retreive my static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/style.css'))
app.use('/js', express.static(__dirname + 'public/main.js'))

//specifically for retreiving my html
app.get('', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

//listening on port 5000
app.listen(port, () => console.info(`Listening on port ${port}. `))