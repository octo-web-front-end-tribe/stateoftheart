'use strict';

var mongoose = require('mongoose');
var dbUtils = require('./utils/databaseUtils');
//var mongoURI = process.env.MONGOLAB_URI || 'mongodb://billetterie-db:27017/stateoftheart';
var mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/stateoftheart';
var Date = mongoose.Schema.Types.Date;
var Array = mongoose.Schema.Types.Mixed;

mongoose.connect(mongoURI, function (err) {
    if (err) {
        throw err;
    }
});

class Database {

    constructor() {

        const dateParams = {
            type: Date,
            set: dbUtils.formatDateForDB,
            get: dbUtils.formatDateForDisplay
        };

        const toArray = {
            type: Array,
            set: dbUtils.stringToArray,
            get: dbUtils.arrayToString
        };

        this.projects = mongoose.model('Projects', mongoose.Schema({
            name: String,
            context: String,
            stacks: String,
            participants: toArray,
            startDate: dateParams,
            endDate: dateParams,
            image: String
        }), 'projects');
    }
}

module.exports = Database;
