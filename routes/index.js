var express = require('express');
var router = express.Router();
var projectsController = new (require('../controllers/projectsController'))();

router.get('/', projectsController.displayAll);

module.exports = router;
