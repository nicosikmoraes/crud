import Combustivel from "./combustivel";

export default class Posto extends Combustivel{
    private nome!: string;

    public getNome(){
        return this.nome;
    }

    public setNome(newNome: string){
        this.nome = newNome;
    }

}