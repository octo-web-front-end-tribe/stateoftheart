'use strict';

var mongoose = require('mongoose');
var mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/stateoftheart';

mongoose.connect(mongoURI, function(err) {
    if (err) { throw err; }
});

class Database {
  constructor() {
    this.projects = mongoose.model('Projects', mongoose.Schema({name: String, context: String, stacks: String}), 'projects');
  }
}

module.exports = Database;
