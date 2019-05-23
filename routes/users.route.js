const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// Login Page
router.get('/login', (req, res) => res.render('login'));

// Login Page
router.get('/logout', (req, res) => res.redirect('login'));

module.exports = router;