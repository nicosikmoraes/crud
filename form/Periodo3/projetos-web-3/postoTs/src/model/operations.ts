import Posto from "./posto";
import Combustivel from "./combustivel";
import MainController from "../controller/MainController";


export default class Operations{
    private control: MainController;
    private posto!: Posto;
    private combustivel!: Combustivel

    public constructor(control: MainController){
        this.control = control
    }

    public calcularCombustivel(precoEtanol: number, precoGasolina: number, nome: string){
            let resultado: number = (precoEtanol / precoGasolina);
        if(resultado < 0.7){
            console.log(`No posto ${nome} compensa mais o etanol, ${resultado}`)
        }else{
            console.log(`No posto ${nome} compensa mais a gasolina, ${resultado}`)
        }
    }
}