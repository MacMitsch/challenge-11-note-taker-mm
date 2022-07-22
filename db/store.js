const fs = require('fs');
const path = require('path');
const util = require("util");
const express = require("express");
const res = require('express/lib/response');
const app = express();


const readFileAsync = util.promisify(fs.readFile);

const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  constructor() {
    this.lastId = 0;
  };
  read(){
    return readFileAsync(path.join(__dirname, "db.json"), "utf8");
  };

  write(note){
    return writeFileAsync(path.join(__dirname, "db.json"));
  };

  getNotes(){
     this.read().then(note =>{
      console.log("im in the getnote", note)
      let parsedNote = JSON.parse(note);
      console.log("parsenote is",parsedNote);
      return parsedNote;
    });
  };

  addNote(newNote) {
    
    this.write(newNote)
    console.log("test add Note",newNote);
    return this.getNotes()
    //   .then(newNote => {
    //   console.log("what the hell is", note)
    //   const newNoteList = [...note,newNote];
    //   console.log("this is the note list",newNoteList);
    // })
  };
  
deleteNote(title) {
  return this.getNotes()
    .then(note => {
      console.log(title);
      for(var i=0; i<note.length; i++){
        if (note[i].title === title){
          note.splice(i,1);
          console.log(note);
          break;
        }
      }
      this.write(note);
    })
  }
};
const store = new Store();
module.exports = store