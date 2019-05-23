'use strict';

// Import Libraries
// ==========================================
require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// const firebase = require('firebase');
// require('firebase/auth');
// require('firebase/database');
// require('firebase/storage');

// Base Configuration
// ==========================================
const app = express();
app.use(logger('dev'));

// EJS
app.engine('ejs', require('ejs-locals'));
app.set('view engine', 'ejs');

// Static files configuration
app.use(express.static('public'));
app.set('public', __dirname + '/public/');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/', require('./routes/index.route'));
app.use('/users', require('./routes/users.route'));
app.use('/projects', require('./routes/projects.route'));
app.use('/wallets', require('./routes/wallets.route'));

// Listen
// ==========================================
const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})