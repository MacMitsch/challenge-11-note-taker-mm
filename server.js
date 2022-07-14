
    // Dependencies 
const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
const folderpath = '/public';

    // Async Processes
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

    // Server Setup
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended:true}));
app.use(express.json());

app.use(express.static(folderpath));

    // API Routes
    // Get Request
app.get('/api/notes', function(req,res){
    readFileAsync('./db/db.json', "utf8").then(function(data){
        notes = [].concat(JSON.parse(data))
        res.json(notes);
    })
});
