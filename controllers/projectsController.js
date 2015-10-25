'use strict';
var db = new (require('../services/database'))();

var projectsController = function() {};

projectsController.prototype.displayAll = function(req, res) {
    db.projects.find().exec().then(function(projects) {
        res.render('index', {title: 'All projects', projects : projects});
    });
};

module.exports = projectsController;