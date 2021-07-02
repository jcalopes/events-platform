export class evento {
    _id:String;
    nome: String;
    descricao: String;
    dataInicio: string;
    dataFim: string;
    local: String;
    promotor: String;
    visivel: Boolean;
    destaque: Boolean;
    categoria: String;
    preco:Number;

    constructor(_id:String,nome: String,
        descricao: String,
        dataInicio: string,
        dataFim: string,
        local: String,
        promotor: String,
        visivel: Boolean,
        destaque:Boolean,
        categoria: String,
        preco:Number) {
            this._id=_id;
            this.nome=nome;
            this.descricao=descricao;
            this.dataInicio=dataInicio;
            this.dataFim=dataFim;
            this.local=local;
            this.promotor=promotor;
            this.visivel=visivel;
            this.destaque=destaque,
            this.categoria=categoria;
            this.preco=preco;
    }
}