import promptSync from 'prompt-sync';
import MainController from '../controller/MainController';
import Combustivel from '../model/combustivel';
import Posto from '../model/posto';

export default class MainScreen{
    private prompt = promptSync();
    private control: MainController;

    constructor(control: MainController){
        this.control = control;
        this.mainMenu()
    }

    public mainMenu(){
            let combustivel: Combustivel = this.control.getNewCombustivel();
            let posto: Posto = this.control.getNewPosto();

            let nome = this.prompt("Qual o nome do banco? ")
            let precoEtanol = this.prompt("Valor Etanol: ")
            let nPrecoEtanol = Number(precoEtanol);

            let precoGasolina = this.prompt("Valor Gasolina: ")
            let nPrecoGasolina = Number(precoGasolina);

            combustivel.setPrecoEtanol(nPrecoEtanol);
            combustivel.setPrecoGasolina(nPrecoGasolina);
            console.log(combustivel.getPrecoEtanol());
            console.log(combustivel.getPrecoGasolina());
            posto.setNome(nome);

            this.control.operations.calcularCombustivel(nPrecoEtanol, nPrecoGasolina, nome);
    }
}