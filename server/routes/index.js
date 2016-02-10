const express = require('express');
const path = require('path');
const ProjectsController = require('../controllers/projectsController');

var router = express.Router();
var projectsController = new ProjectsController();
var staticPath = path.join(__dirname, '../../build');

// the home page is a react app, we serve it statically for the moment
router.get('/', (req, res) => {
    res.header('Cache-Control', "max-age=60, must-revalidate, private");
    res.sendFile('index.html', {
        root: staticPath
    });
});

router.get('/projects', projectsController.listProjects);
router.get('/projects/:id/edit', projectsController.editProjectForm);
router.post('/projects', projectsController.addProject);
router.post('/projects/:id/edit', projectsController.editProject);

module.exports = router;
