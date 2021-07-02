const mongoose=require('mongoose');

const bilheteSchema=new mongoose.Schema({
    evento:{
        id:String,
        local:String,
        nome:String,
        dataInicio:Date,
        dataFim:Date,
        promotor:String,
        preco:Number,
        categoria:{
            type:String,
            enum:['Música','Teatro','Dança','Stand Up Comedy','Cinema','Outros'],
            default:'Outros'
          }
    },
    username:String,
    dataCompra:{
        type:Date,
        default:new Date(Date.now())
    },
    pago:{
        type:Boolean,
        default:false
    },
    validado:{
        type:Boolean,
        default:false
    },
    cancelado:{
        type:Boolean,
        default:false
    },
    dataCancelamento:Date
});

module.exports=mongoose.model("Bilhete", bilheteSchema);