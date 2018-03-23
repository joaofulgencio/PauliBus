'use strict'
var express = require('express');
var router = express.Router();
var linha = require('./index');

router.post('/linhas', linha.cadastro);

module.exports = router;