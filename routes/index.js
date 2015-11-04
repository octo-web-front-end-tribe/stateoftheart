var express = require('express');
var router = express.Router();
var projectsController = new (require('../controllers/projectsController'))();

router.get('/', projectsController.displayAll);
router.get('/projects', projectsController.listProjectForm);
router.get('/projects/:id/edit', projectsController.editProjectForm);
router.post('/projects', projectsController.addProject);
router.post('/projects/:id/edit', projectsController.editProject);

module.exports = router;
