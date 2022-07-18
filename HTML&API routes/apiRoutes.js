const router = require('express').Router();
const { createNewNote, deleteNote } = require('../db/db.json');
let { noteArray } = require('../db/db.json');

// get
router.get('/notes', (req, res) => {
  let results = noteArray;
  res.json(results);
});

router.post('/notes', (req, res) => {
  // set id 
  if(notesArray){
  req.body.id = noteArray.length.toString();
  } else 
  {req.body.id = 0}
  res.json(createNewNote(req.body, noteArray));
});

// Route
router.delete('/notes/:id', async (req, res) => {
  const { id } = req.params
  noteArray = await deleteNote(id, noteArray);
  res.json(noteArray);
});

module.exports = router;