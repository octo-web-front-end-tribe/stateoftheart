const express = require('express');
const ProjectsController = require('../controllers/projectsController');

var router = express.Router();
var projectsController = new ProjectsController();

router.get('/', projectsController.displayAll);
router.get('/projects', projectsController.listProjectForm);
router.get('/projects/:id/edit', projectsController.editProjectForm);
router.post('/projects', projectsController.addProject);
router.post('/projects/:id/edit', projectsController.editProject);

module.exports = router;
