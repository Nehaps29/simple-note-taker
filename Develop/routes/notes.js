const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
notes.get('/api/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) =>
    res.json(JSON.parse(data))
  );
});

// POST Route for a error logging
notes.post('/api/notes', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;//How do we alreday know about these destructred items, like there will be two items in responses

  const addNote = {
    title,
    text,
    //how to add id here, when in db.json only title and text are available.
  };

  if (title && text) {
    readAndAppend(addNote, './db/db.json');
    res.json(`Notes added`);
  } else {
    res.json({
      message: 'Object is valid, not logging. Check front end implementation', //where will i see this message
      error_id: payload.error_id,
    });
  }
});

module.exports = notes;
