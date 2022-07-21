const router = require('express').Router();
const { create, deleteNote } = require('../db/db.json');
let { noteArray } = require('../db/db.json');

// get
router.get("/notes", (req, res) => {
 store
  .getNotes()
  .then(notes => res.json(notes))
  .catch(err => res.status(500).json(err))
});

router.post('/notes', (req, res) => {
  // set id 
  store
    .addNote(req,body)
    .then((notes) => res.status(500).json(err))
});

// Route
router.delete('/notes/:id', (req, res) => {
  store
    .deleteNote(req.params.title)
    .then(()=> res.json({ok:true}))
});

module.exports = router;