import Combustivel  from "./combustivel.js"

class Posto extends Combustivel{
    constructor(nome, combustivel){
        super(combustivel);
        this.nome = nome;
    }
}

export default Posto;