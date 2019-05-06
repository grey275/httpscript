const https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    let data = []

    response.on('data', function (chunk) {
      data.push(chunk);
    });

    response.on('end', function () {
      console.log(data.join(''));
    });
  });
}

getAndPrintHTMLChunks();