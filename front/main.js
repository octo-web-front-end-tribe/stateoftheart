require("./public/stylesheets/style.scss");

import React from 'react'
import ReactDom from 'react-dom'

var StateOfTheArt = require('./app/StateOfTheArt.js').default;

ReactDom.render(<StateOfTheArt/>, document.getElementById('app'));