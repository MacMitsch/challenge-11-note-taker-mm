const util = require("util");
const fs = require("fs");
const path = require("path");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store{
    constructor(){
        this.lastId= 0;
    }
    
    
    read(){
        return readFileAsync("db/db.json", "utf8")
    }
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note))
    }
   
    getNotes() {
        return this.read()
        .then(notes => {
            let parsedNotes;
            try{ parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) { parsedNotes =[];
            }
            return parsedNotes
        });
    }

    addNote(note){
        console.log("made it past store")
        const { title, text } = note
        if(!title|| !text){
            throw new Error("error please fill title and text.")
        }
        const newNote = {title,text,id:uuidv4()}
        


        return this.getNotes()
        .then(notes => [...notes, newNote])
        .then(updatedNotes => this.write(updatedNotes))
        .then(() => this.newNote)
    }

    

    deleteNote(id) { console.log("delete notes")
        return this.getNotes()
        .then(notes => notes.filter(note => note.id !==id))
        .then(keptNotes => this.write(keptNotes))
        console.log("delete note")  }
}

module.exports = new Store();