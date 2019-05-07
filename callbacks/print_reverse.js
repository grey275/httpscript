const getHTML = require('../getHTML');
const printHTML = require('../printHTML');

function printReverse(str) {
  printHTML(str
    .split('')
    .reverse()
    .join(''));
}

const  host = 'sytantris.github.io';
const  path = '/http-examples/step1.html';

getHTML(host, path, printReverse);