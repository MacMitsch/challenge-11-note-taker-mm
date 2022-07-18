const router = require('express').Router();
const { createNewNote, deleteNote } = require('../db/db.json');
let { notesArray } = require('../db/db.json');

// get
router.get('/notes', (req, res) => {
  let results = notesArray;
  res.json(results);
});

router.post('/notes', (req, res) => {
  // set id 
  if(notesArray){
  req.body.id = notesArray.length.toString();
  } else 
  {req.body.id = 0}
  res.json(createNewNote(req.body, notesArray));
});

// Route
router.delete('/notes/:id', async (req, res) => {
  const { id } = req.params
  notesArray = await deleteNote(id, notesArray);
  res.json(notesArray);
});

module.exports = router;