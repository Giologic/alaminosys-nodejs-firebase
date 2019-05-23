const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../config/auth');


// View List Projects Page
router.get('/', (req, res) => {
  res.render('projects', {
    page: 'project_list',
  });
});

// View Create Project Page
router.get('/create', (req, res) => {
  res.render('projects', {
    page: 'project_form',
  });
});

// Create a Project 
router.post('/create', (req, res) => {
  console.log(req.body.title)
});

// View Project Details Page
router.get('/details', (req, res) => {
  res.render('projects', {
    page: 'project_details',
  });
});




module.exports = router;