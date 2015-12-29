require("./public/stylesheets/style.scss");
require("./public/images/no-image.svg");

var React = require('react');
var StateOfTheArt = require('./app/StateOfTheArt.js');

React.render(<StateOfTheArt/>, document.getElementById('body'));