'use restrict'
var mongoose = require('mongoose');
Linha = mongoose.model('Linhas');

exports.cadastro = function(req, res) {
    var novaLinha = new Linha(req.body);
    novaLinha.save(function(err, linha) {
        if(err) res.json({message: 'Não conseguiu salvar', error: err});
        res.json({message: 'Linha cadastrada com sucesso!', 'Message': linha});
    });
};
