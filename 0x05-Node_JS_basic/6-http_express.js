const express = require('express');

const app = express();

app.get('/', (_, res) => {
  res.send('Hello ALX!');
});

app.listen(1245);

module.exports = app;
