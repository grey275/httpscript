const getHTML = require('../getHTML');
const printHTML = require('../printHTML');

function toLowerCase(str) {
  printHTML(str.toLowerCase());
}

const  host = 'sytantris.github.io';
const  path = '/http-examples/step1.html';

getHTML(host, path, toLowerCase);