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
  write(){
    return this.read().then(notes =>{
      let parsedNotes = Json.parse(notes);
      console.log(parsedNotes);
      return parsedNotes;
    });
  };

  addNote(newNote) {
    console.log(newNote);
    return this.getNotes().then(notes => {
      const newNoteList = [...notes,newNote];
      console.log(newNoteList);
    })
  };

}
const store = new Store();
module.exports = store