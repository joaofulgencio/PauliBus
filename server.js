const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;
const Linhas = require('./linhas/linhaModel');
const app = express();

mongoose.connect('mongodb://admin:admin@ds135757.mlab.com:35757/paulibus');
//mongoose.connect('mongodb://localhost:27017/paulibus');

app.use(function (req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   next();
});
app.use(bodyParser.json());
app.use(require('./linhas/linhaRoute'));

app.listen(port);

console.log("Server started on port: ", port);
