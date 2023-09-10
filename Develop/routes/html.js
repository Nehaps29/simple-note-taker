const html = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');


const path = require('path');

html.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes  page
html.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

module.export = html;