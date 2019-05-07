const getHTML = require('../getHTML');
const printHTML = require('../printHTML');

function toUpperCase(str) {
  printHTML(str.toUpperCase());
}

const  host = 'sytantris.github.io';
const  path = '/http-examples/step1.html';

getHTML(host, path, toUpperCase);