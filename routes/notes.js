const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const util = require('util');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');


// GET Route for retrieving diagnostic information
router.get('/api/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) =>
    res.json(JSON.parse(data))
  );
});

// POST Route for a error logging
router.post('/api/notes', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  const addNote = {
    title,
    text,
    id: uuidv4()
    //how to add id here, when in db.json only title and text are available.
  };

  if (title && text) {
    readAndAppend(addNote, './db/db.json');
    res.json(`Notes added`);
  } 
});


module.exports = router;
