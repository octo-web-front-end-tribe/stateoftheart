'use strict';
var db = new (require('../services/database'))();

var projectsController = function () {
};

projectsController.prototype.displayAll = function (req, res) {
    db.projects.find().exec().then(function (projects) {
        res.render('index', {projects: projects});
    });
};

projectsController.prototype.listProjectForm = function (req, res) {
    db.projects.find().exec().then(function (projects) {
        res.render('projectForm', {projects: projects, added: false});
    });
};

projectsController.prototype.editProjectForm = function (req, res) {
    var id = req.params.id;
    db.projects.findById(id).exec().then(function (project) {
        db.projects.find().exec().then(function (projects) {
            res.render('projectForm', {projects: projects, project: project, added: false});
        });
    });
};

projectsController.prototype.addProject = function (req, res) {
    var project = req.body;
    db.projects.create(project, function (err) {
        if (err) {
            console.error(err);
        } else {
            db.projects.find().exec().then(function (projects) {
                res.render('projectForm', {projects: projects, added: true});
            });
        }
    });
};

projectsController.prototype.editProject = function (req, res) {
    var id = req.params.id;
    var project = req.body;
    db.projects.findById(id).exec().then(function (projectToUpdate) {
        projectToUpdate.name = project.name;
        projectToUpdate.stacks = project.stacks;
        projectToUpdate.save();

        db.projects.find().exec().then(function (projects) {
            res.render('projectForm', {projects: projects, project: project, added: true});
        });

    });
};

module.exports = projectsController;