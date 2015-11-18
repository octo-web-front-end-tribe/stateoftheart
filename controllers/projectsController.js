'use strict';

const async = require('async');
const Database = require('../services/database');

var db = new Database();

class ProjectsController {
    handleError(err) {
        console.error(err);
    }

    displayAll(req, res) {
        db.projects.find({}, (err, projects) => {
            if (err) return this.handleError(err);
            res.render('index', {projects: projects});
        });
    }

    listProjectForm(req, res) {
        db.projects.find({}, (err, projects) => {
            if (err) return this.handleError(err);
            res.render('projectForm', {projects: projects, added: false})
        });
    }

    editProjectForm(req, res) {
        var id = req.params.id;

        async.parallel({
            project: (callback) => {
                db.projects.findById(id).exec(callback);
            },

            projects: (callback) => {
                db.projects.find().exec(callback);
            }
          }, (err, results) => {
            if (err) return this.handleError(err);
            res.render('projectForm', {projects: results.projects, project: results.project, added: false});
          });

    }

    addProject(req, res) {
        var project = req.body;

        async.series({
            newProject: (callback) => {
                db.projects.create(project, callback);
            },

            projects: (callback) => {
                db.projects.find().exec(callback);
            }
        }, (err, results) => {
            if (err) return this.handleError(err);
            res.render('projectForm', {projects: results.projects, added: true})
        });
    }

    editProject(req, res) {
        var id = req.params.id;
        var project = req.body;

        async.series({
            updatedProject: (callback) => {
                db.projects.findById(id).exec().then((projectToUpdate) => {
                    projectToUpdate
                        .set('name', project.name)
                        .set('stacks', project.stacks)
                        .set('context', project.context)
                        .save(callback);
                });
            },

            projects: (callback) => {
                db.projects.find().exec(callback);
            }
        }, (err, results) => {
            if (err) return this.handleError(err);
            res.render('projectForm', {projects: results.projects, project: results.updatedProject, added: true});
        });
    }
}

module.exports = ProjectsController;
