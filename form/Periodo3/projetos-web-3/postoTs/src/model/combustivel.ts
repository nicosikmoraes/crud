
export default class Combustivel {
    private precoEtanol!: number;
    private precoGasolina!: number;
    
    constructor(){
        const gasolina = "Combustivel"
        const etanol = "Combustivel"
    }

    public getPrecoEtanol(){
        return this.precoEtanol
    }

    public setPrecoEtanol(newPreco: number){
        this.precoEtanol = newPreco
    }

    
    public getPrecoGasolina(){
        return this.precoGasolina
    }

    public setPrecoGasolina(newPreco: number){
        this.precoGasolina = newPreco
    }
}