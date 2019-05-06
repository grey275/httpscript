const https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function data (chunk) {
      console.log('I got a chunky boi. chunk factor:', chunk.length);
      console.log('oh no he got loose!:\n', chunk);
    })

  })
}

getAndPrintHTMLChunks();