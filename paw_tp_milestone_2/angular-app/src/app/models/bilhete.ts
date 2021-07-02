export class bilhete{
    _id:String;
    username:String;
    dataCompra:Date;
    evento:{
        id:String,
        local:String,
        nome:String,
        dataInicio:Date,
        dataFim:Date,
        promotor:String,
        preco:Number,
        categoria:String
    };
    validado:boolean;
    cancelado:boolean;
    dataCancelamento:Date;
    constructor(_id:string, username:string,evento:any,
        validado:boolean, cancelado: boolean,dataCompra:Date,
        dataCancelamento:Date){
        this._id = _id;
        this.validado = validado;
        this.cancelado = cancelado;
        this.username=username;
        this.evento=evento;
        this.dataCompra=dataCompra;
        this.dataCancelamento=dataCancelamento;
    }
}

