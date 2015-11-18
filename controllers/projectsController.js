'use strict';

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
        db.projects.findById(id, (err, project) => {
            if (err) return this.handleError(err);
            db.projects.find({}, (err, projects) => {
                if (err) return this.handleError(err);
                res.render('projectForm', {projects: projects, project: project, added: false});
            });
        });
    }

    addProject(req, res) {
        var project = req.body;
        db.projects.create(project, (err) => {
            if (err) return this.handleError(err);
            db.projects.find((err, projects) => {
                if (err) return this.handleError(err);
                res.render('projectForm', {projects: projects, added: true})
            });
        });
    }

    editProject(req, res) {
        var id = req.params.id;
        var project = req.body;

        db.projects.findById(id, (err, projectToUpdate) => {
            if (err) return this.handleError(err);

            projectToUpdate.name = project.name;
            projectToUpdate.stacks = project.stacks;
            projectToUpdate.save((err, updatedProject) => {
              if (err) return this.handleError(err);
              db.projects.find((err, projects) => {
                if (err) return this.handleError(err);
                res.render('projectForm', {projects: projects, project: updatedProject, added: true});
              });
            });
        });
    }
}

module.exports = ProjectsController;
