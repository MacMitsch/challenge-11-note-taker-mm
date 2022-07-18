const router = require("express").Router();
const store = require("../db/store");

    // existing notes request
router.get("/notes", function (req,res){
    store
    .getNotes()
    .then(notes =>{ res.json(notes)
    })
    .catch(err => {
        res.status(300).json(err)
    })
})
    // Posting new note

router.post("/notes", function (req,res){
    store
    .addNote(req.body)
    .then((note =>
        res.json(note))
    .catch(err => {
        res.status(500).json(err));
    });
    // Delete Note

router.delete("/notes/:id", (req,res)=>{
    store
    .removeNote(req.params.id)
    .then(()=> res.json({ok:true}))
    .catch(err => res.status(300).json(err))
})
module.exports = router;