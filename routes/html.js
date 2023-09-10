const router = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const path = require('path');

// GET Route for index  page
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);



// GET Route for notes  page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = router;