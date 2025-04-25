"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class MainScreen {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
        this.mainMenu();
    }
    mainMenu() {
        let combustivel = this.control.getNewCombustivel();
        let posto = this.control.getNewPosto();
        let nome = this.prompt("Qual o nome do banco? ");
        let precoEtanol = this.prompt("Valor Etanol: ");
        let nPrecoEtanol = Number(precoEtanol);
        let precoGasolina = this.prompt("Valor Gasolina: ");
        let nPrecoGasolina = Number(precoGasolina);
        combustivel.setPrecoEtanol(nPrecoEtanol);
        combustivel.setPrecoGasolina(nPrecoGasolina);
        console.log(combustivel.getPrecoEtanol());
        console.log(combustivel.getPrecoGasolina());
        posto.setNome(nome);
        this.control.operations.calcularCombustivel(nPrecoEtanol, nPrecoGasolina, nome);
    }
}
exports.default = MainScreen;
