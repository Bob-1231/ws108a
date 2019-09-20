const http = require('http');

const hostname = '127.0.0.1';
const port = 65535;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body>Hello: <a href="http://tw.youtube.com">YouTube</a></body></html>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});