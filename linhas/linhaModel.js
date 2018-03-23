const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linhaSchema = new Schema({
    Numero: {
        type: String,
        required: true
    },
    LocalPartida: String,
    LocalDestino: String,
    Horarios: [{
        Partida: String,
        horários:[String]
    }]
});

module.exports = mongoose.model('Linhas', linhaSchema);