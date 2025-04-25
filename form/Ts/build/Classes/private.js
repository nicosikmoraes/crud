"use strict";
class conta {
    constructor() {
        //Private: Só pode ser acessado ou modificado dentro da classe que foi criado.
        this.limite = 450;
    }
    aumentarLimite(quantidade) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora o seu limite é: ${this.limite}`);
        }
        else {
            console.log(`limite reprovado`);
        }
    }
    solicitarLimite(estaAutenticado, quantidade) {
        if (estaAutenticado) {
            this.aumentarLimite(quantidade);
        }
        else {
            return false;
        }
    }
}
const fulano = new conta();
fulano.solicitarLimite(true, 500);
console.log(fulano);
