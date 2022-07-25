const fs = require('fs');
const path = require('path');
const util = require("util");
const { v4: uuidv4 } = require('uuid');

const readFileAsync = util.promisify(fs.readFile);

const writeFileAsync = util.promisify(fs.writeFile);

class Store {

  read() {
    return readFileAsync("db/db.json", "utf8");
  };

  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  };

  getNotes() {
    return this.read().then(note => {
      let parsedNote = [].concat(JSON.parse(note));
      return parsedNote;
    });
  };

  addNote(note) {
    const { title, text } = note
    const newNote = { title, text, id: uuidv4() };
    console.log(newNote)

    return this.getNotes()
      .then(note => [...note, newNote])
      .then(updatedNote => this.write(updatedNote))
      .then(() => newNote)

  };
  // };
  deleteNote(id) {
    return this.getNotes()
      .then(note => note.filter(note => note.id !== id))
      .then(keptNotes => this.write(keptNotes))
  }
};

module.exports = new Store();