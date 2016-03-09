'use strict';

const async = require('async');
const Database = require('../services/database');

var db = new Database();

class ProjectsController {

    handleError(err) {

        console.err(err);
        return {err};
    }

    displayAll(req, res) {

        db.projects.find({}, (err, projects) => {
            if (err) return this.handleError(err);
            res.render('index', {projects: projects});
        });
    }

    listProjectForm(req, res) {

        db.projects.find({}, (err, projects) => {

            if (err) {
                return this.handleError(err);
            }

            res.json({projects: projects});
        });
    }

    editProjectForm(req, res) {
        var id = req.params.id;

        db.projects.findById(id).exec(function(err, project) {
            if (err) {
                return this.handleError(err);
            }

            res.json(project);
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
                        .set('participants', project.participants)
                        .set('startDate', project.startDate)
                        .set('endDate', project.endDate)
                        .set('image', project.image)
                        .save(callback);
                });
            },

            projects: (callback) => {
                db.projects.find().exec(callback);
            }
        }, (err, results) => {
            if (err) return this.handleError(err);
            res.render('projectForm', {
                projects: results.projects,
                project: results.updatedProject,
                added: true
            });
        });
    }
}

module.exports = ProjectsController;
