const router = require("express").Router();
const store = require("../db/store");


// get
router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then(note => res.json(note))
    .catch(err => res.status(400).json(err))

});

router.post('/notes', (req, res) => {
  // set id 
  console.log("rec body", req.body)
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(400).json(err))
});

// Route
router.delete('/notes/:id', (req, res) => {
  store
    .deleteNote(req.params.title)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(400).json(err))
});

module.exports = router;