'use strict';

const app = require('express')();

app.use('/', function(req, res, next) {
  res.status(200).json({message: 'Working Web!'});
});

app.listen(3001, function() {
  console.log('Web is listening on port 3001');
});
