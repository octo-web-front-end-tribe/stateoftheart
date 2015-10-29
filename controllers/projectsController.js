'use strict';
var db = new (require('../services/database'))();

var projectsController = function () {
};

projectsController.prototype.displayAll = function (req, res) {
    db.projects.find().exec().then(function (projects) {
        res.render('index', {title: 'StateOftheart', projects: projects});
    });
};

projectsController.prototype.addProjectForm = function (req, res) {
    res.render('addProject', {title: 'StateOftheart', added: false});
};

projectsController.prototype.addProject = function (req, res) {
    var project = req.body;
    db.projects.create(project, function (err, project) {
        if (err) {
            console.error(err);
        } else {
            res.render('addProject', {added: true});
        }
    });
};

module.exports = projectsController;