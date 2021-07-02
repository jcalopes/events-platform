export class local {
    _id:String;
    username:String;
    nome:String;
    lotacao:Number;
    lotacaoPerc:Number;
    rua:String;
    codPostal:String;
    cidade:String;
    pais:String;

    constructor(
        id:String,
        username:string,
        nome:String,
        lotacao:Number,
        lotacaoPerc:Number,
        rua:String,
        codPostal:String,
        cidade:String,
        pais:String){
            this._id=id;
            this.username = username;
            this.nome = nome;
            this.lotacao = lotacao;
            this.lotacaoPerc = lotacaoPerc;
            this.rua = rua;
            this.codPostal = codPostal;
            this.cidade = cidade;
            this.pais = pais;
        }
}