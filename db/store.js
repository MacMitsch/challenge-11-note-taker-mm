const fs = require('fs');
const path = require('path');
const util = require("util");
const express = require("express");
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
    return writeFileAsync(path.join(__dirname, "db.json"), JSON.stringify(note));
  };

  getNote(){
    return this.read().then(note =>{
      let parsedNote = Json.parse(note);
      console.log(parsedNote);
      return parsedNote;
    });
  };

  addNote(newNote) {
    console.log(newNote);
    return this.getNote().then(note => {
      const newNoteList = [...note,newNote];
      console.log(newNoteList);
    })
  };
  
deleteNote(title) {
  return this.getNote()
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