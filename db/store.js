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
            let dataNotes;
            try{ dataNotes = [].concat(JSON.parse(notes));
            } catch (err) { dataNotes =[];
            }
            return dataNotes
        });
    }

    addNote(note){
        
        const { title, text } = note
        if(!title|| !text){
            throw new Error("error please fill title and text.")
        }
        const newNote = {title,text,id: ++this.lastId()};
        


        return this.getNotes()
        .then(notes => [...notes, newNote])
        .then(updatedNotes => this.write(updatedNotes))
        .then(() => this.newNote)
    }

    

    deleteNote(id) {
        return this.getNotes()
        .then(notes => notes.filter(note => note.id !==id))
        .then(filteredNotes => this.write(filteredNotes))
        console.log("delete note")  }
}

module.exports = new Store();