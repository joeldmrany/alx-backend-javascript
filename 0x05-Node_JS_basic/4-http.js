const app = require('http');

module.exorts = app.createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.end();
}).listen(1245);
