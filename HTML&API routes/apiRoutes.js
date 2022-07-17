const router = require("express").Router();
const store = require("../db/store");

    // existing notes request
router.get("/notes", (req,res)=>{
    store
    .getNotes()
    .then(notes =>{
        res.json(notes)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})
    // Posting new note

router.post("/notes", (req,res)=>{
    console.log(req.body)
    store
    .addNote(req.body)
    .then(note =>{
        res.json(note)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})
    // Delete Note

router.delete("/notes/:id", (req,res)=>{
    store
    .removeNote(req.params.id)
    .then(()=> res.json({ok:true}))
    .catch(err => res.status(400).json(err))
})
module.exports = router;