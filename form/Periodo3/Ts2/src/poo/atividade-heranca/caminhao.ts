import atributosComuns from "./globais";

export default class caminhao extends atributosComuns {
    cargaMaxima: number;

    constructor(cargaMaxima: number, marca: string, modelo: string, ano: number){
        super(marca, modelo, ano)
        this.cargaMaxima = cargaMaxima;
    }

    public getCargaMaxima(): number{
        return this.cargaMaxima;
    }
}