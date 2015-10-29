var express = require('express');
var router = express.Router();
var projectsController = new (require('../controllers/projectsController'))();

router.get('/', projectsController.displayAll);
router.get('/projects/add', projectsController.addProjectForm);
router.post('/projects/add', projectsController.addProject);

module.exports = router;
