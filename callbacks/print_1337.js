const getHTML = require('../getHTML');
const printHTML = require('../printHTML');

function print1337(str) {
  printHTML(translateToLeet(str));
}

function translateToLeet(str) {
  const out = []
  let searchStart = 0;
  let i = 0;
  while (i < leetConversions.length) {
    const {key, value} = leetConversions[i];
    let searchString = str.slice(searchStart);
    console.log('searchString: ', searchString);
    let matchIndex = searchString.search(key) + searchStart;
    if (matchIndex !== -1) {
      out.push(str.slice(searchStart, matchIndex + value.length) + value);
      searchStart = matchIndex + value.length;
      i = 0;
    } else {
      i++;
    }
    console.log('next i: ' + i)
    console.log('matchIndex: '+ matchIndex);
    console.log(`searchStart: `+ searchStart)
    console.log(`key: ${key}, value: ${value}`);
    console.log('')
  }
  return out.join('');
};


const  host = 'sytantris.github.io';
const  path = '/http-examples/step1.html';


const leetConversions =  [
  { key: 'a', value: '4' },
  { key: 'e', value: '3' },
  { key: 'l', value: '1' },
  { key: 'o', value: '0' },
  { key: 's', value: '5' },
  { key: 't', value: '7' },
  { key: 'ck', value: 'x' },
  { key: 'er', value: '0r' },
  { key: 'you', value: 'j00' },
]

// getHTML(host, path, print1337);
console.log(translateToLeet('hi there bro'));