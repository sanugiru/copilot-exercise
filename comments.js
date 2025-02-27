// Create web server and listen on port 8080
// Load the comments module
// Create a route for POST requests to /comments
// When a POST request is made, parse the request body and add the comment to the comments array
// Send back a 200 response

var http = require('http');
var comments = require('./comments');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function (req, res) {
  if (req.method === 'POST' && url.parse(req.url).pathname === '/comments') {
    var body = '';
    req.on('data', function (chunk) {
      body += chunk;
    });
    req.on('end', function () {
      var comment = querystring.parse(body).comment;
      comments.add(comment);
      res.writeHead(200);
      res.end();
    });
  }
});

server.listen(8080);
console.log('Server running on port 8080');