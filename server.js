
    // Dependencies 
const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
const folderpath = '/public';

//     // Async Processes
// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

//     // Server Setup
// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.urlencoded({ extended:true}));
// app.use(express.json());

// app.use(express.static(folderpath));

//     // API Routes
//     // GET Request
// app.get('/api/notes', function(req,res){
//     readFileAsync('./db/db.json', "utf8").then(function(data){
//         notes = [].concat(JSON.parse(data))
//         res.json(notes);
//     })
// });

//     // POST Request/ Target 

// app.post("/api/notes", function(req,res){
//     const notes = req.body;
//     readFileAsync("./db/db.json", "utfa8").then(function(data){
//         const notes = [].concat(json.parse(data));
//         note.id = notes.length + 1
//         notes.push(note);
//         return notes
//     }).then(function(notes){
//         writeFileAsync("./db/db.json", JSON.stringify(notes));
//         res.json(notes);
//     })
// });

//     // Delete Request

// app.delete("/api/notes/:id", function(req,res){
//     const idDelete= parseInt(req.params.id);
//     readFileAsync("./db/db.json", "utf8").then(function(data){
//         const notes = [].concat(JSON.parse(data));
//         const newNotesData = []
//         for(let i = 0; i<notes.length; i++) {
//             if(idDelete !== notes[i].id) {
//                 newNotesData.push(notes[i])
//             }
//         }
//         return newNotesData
//     }) .then(function(notes){
//         writeFileAsync("./db/db/json", JSON.stringify(notes))
//         res.send('Success');
//     })
// })

//     // HTML Routing
// app.get("/notes", function(req,res){
//     res.sendFile(path.join(__dirname, "./public/notes.html"));
// });
// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname, "./public/index.html"));
// });
// app.get("*", function(req, res){
//     res.sendFile(path.join(__dirname,"./public/index.html"));
// });

//     // Listen

// app.listen(PORT, function(){
//     console.log("App is working" + PORT);
// });
