'use restrict'
var mongoose = require('mongoose');
Linha = mongoose.model('Linhas');

exports.cadastro = function(req, res) {
    var novaLinha = new Linha(req.body);
    novaLinha.save(function(err, linha) {
        if(err) res.json({message: 'Não conseguiu salvar', error: err});
        res.json({message: 'Linha cadastrada com sucesso!', 'result': linha});
    });
};

exports.linhas = function(req, res) {
    Linha.find({}, "-_id -__v -Horarios._id", function(err, linhas) {
        if(err) res.json({message: 'Erro', error, err}).status(404);
        if(!linhas.length) res.json({message:'Nenhuma linha cadastrada!', result:[]}).status(200);
        else 
           res.json({message:'Sucesso!', 'result': linhas}).status(200);
    });
    
}