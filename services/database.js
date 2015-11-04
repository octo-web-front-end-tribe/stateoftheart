var mongoose = require('mongoose');
var mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/stateoftheart';

mongoose.connect(mongoURI, function(err) {
    if (err) { throw err; }
});

var database = function() {};

database.prototype.projects = mongoose.model('Projects', mongoose.Schema({name: String, stacks: String}), 'projects');

module.exports = database;