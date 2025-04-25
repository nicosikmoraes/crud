import atributosComuns from "./globais";

export default class moto extends atributosComuns {
    cilindrada: number;

    constructor(cilindrada: number, marca: string, modelo: string, ano: number){
        super(marca, modelo, ano);
        this.cilindrada = cilindrada;
    }

    public getCilindrada(){
        return this.cilindrada;
    }
}
