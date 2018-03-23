const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;
const Linhas = require('./linhas/linhaModel');
const app = express();

mongoose.connect('mongodb://localhost:27017/pauliBus');

app.use(bodyParser.json());
app.use(require('./linhas/linhaRoute'));

app.listen(port);

console.log("Server started on port: ", port);
