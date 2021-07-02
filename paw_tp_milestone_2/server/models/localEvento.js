var mongoose = require('mongoose');

var localEventoSchema = new mongoose.Schema({
    username: String,
    nome: String,
    lotacao: Number,
    lotacaoPerc:Number,
    rua:String,
    codPostal:String,
    cidade:String,
    pais:String
});

module.exports = mongoose.model('LocalEvento', localEventoSchema);