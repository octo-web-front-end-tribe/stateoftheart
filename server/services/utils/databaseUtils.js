const moment = require ('moment');

module.exports = {

    formatDateForDB: (date) => {

        if (date && date.length > 0) {
            return moment(date, 'DD/MM/YYYY');
        }
    },

    formatDateForDisplay: (date) => {

        if (date) {
            return moment(date).format('DD/MM/YYYY');
        }
    },

    stringToArray: string =>  {

        if (string) {
            return string.split(/[\s,;-]+/).map(
                element => element.trim()
            );
        }
    },

    arrayToString: array => {

        if (array) {
            return array.join(', ');
        }
    }
};