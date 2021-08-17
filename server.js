const express = require("express");
const fs = require('fs');
const path = require('path')

const app = express();

app.use(express.static('public'));


// API routes

app.get('/api/notes', (req, res) => {

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        res.json(JSON.parse(data))
    })
    
    
})

// GET --> specific id
// /api/notes/:id - specific note w/ specific id 

// POST --> used for adding a new note to your db.json

// DELETE



// HTML routes

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.listen(3001, () => {
    console.log('Server is now listening')
})
