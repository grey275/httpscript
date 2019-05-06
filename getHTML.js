const https = require('https');

function getHTML (host, path, onCompleteCallback) {

  var requestOptions = {host, path};

  /* Add your code here */
  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    let data = []

    response.on('data', function (chunk) {
      data.push(chunk);
    });

    response.on('end', function () {
      onCompleteCallback(data.join(''));
    });
  });
}

module.exports = getHTML;