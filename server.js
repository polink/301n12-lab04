'use strict';

// Node Modules

// Dependencies
require('dotenv').config();
const express = require('express');

// App
const app = express();

// PORT: setting up port, if it's not at 3000, set it up there
// also note: main const are always in all caps, or at least Nicolas prefers all caps. other option is '_port'
const PORT = process.env.PORT || 3000; 

app.use(express.static('./public'));

app.get('/hello', (request, response) => {
  response.status(200).send('hello');
})

// app.get('home') Nicolas put a pin on this, will come back later

app.use('*', (req, res) => {
  res.send('Apologies, but that did not work.');
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))