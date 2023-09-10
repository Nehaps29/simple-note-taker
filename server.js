const express = require('express');
const htmlRoutes = require('./routes/html.js');
const notesRoutes = require('./routes/notes.js');
const PORT = process.env.PORT || 3001;
const path = require('path');
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(htmlRoutes);
app.use(notesRoutes);



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
