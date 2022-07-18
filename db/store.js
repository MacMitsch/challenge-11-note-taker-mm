const util = require("util");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { parse } = require("path");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store{
    read(){
        return readFileAsync("db/db.json", "utf8")
    }
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note))
    }
    addNote(note){
        const { title, text } = note
        if(!title|| !text){
            throw new Error("error please fill title and text.")
        }
        const newNote = {title,text,id:uuidv4()}
        
console.log("made it past store")

        return this.getNotes()
        .then(notes => [...notes, newNote])
        .then(updatedNotes => this.write(updatedNotes))
        .then(() => this.newNote)
    }
    getNotes() { console.log("get notes initiated")
        return this.read()
        .then(notes => {
            return JSON.parse(notes)||[];
        })
        }

    

    deleteNote(id) { console.log("delete notes")
        return this.getNotes()
        .then(notes => notes.filter(note => note.id !==id))
        .then(keptNotes => this.write(keptNotes))
        console.log("delete note")  }
}

module.exports = new Store();