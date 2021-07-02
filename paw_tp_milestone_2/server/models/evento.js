var mongoose = require("mongoose");

var eventoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  dataInicio: Date,
  dataFim: Date,
  local: String,
  promotor: String,
  visivel:{
    type:Boolean,
    default:true
  },
  categoria:{
    type:String,
    enum:['Música','Teatro','Dança','Stand Up Comedy','Cinema','Outros'],
    default:'Outros'
  },
  destaque:{
    type:Boolean,
    default:false
  },
  preco:{
    type:Number,
    default:0
  },
  
});

module.exports = mongoose.model("Evento", eventoSchema);
