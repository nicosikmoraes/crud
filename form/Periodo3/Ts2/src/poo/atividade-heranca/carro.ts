import atributosComuns from "./globais";

export default class carro extends atributosComuns {
    private portas: number;

    constructor(portas: number, marca: string, modelo: string, ano: number){
        super(marca, modelo, ano)
        this.portas = portas
    }

    public getPortas(): number{
        return this.portas;
    }
}

