const getHTML = require('./getHTML');

function printHTML (data) {
  console.log(data);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

const {host, path} = requestOptions

module.exports = printHTML;