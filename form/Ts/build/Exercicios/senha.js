"use strict";
class caixa {
    constructor(senhaTeste) {
        this.senhaCaixa = "1605nico";
        this.segredo = "MichaelJordan";
        this.senhaTeste = senhaTeste;
    }
    abrirCaixa() {
        if (this.senhaTeste === this.senhaCaixa) {
            return this.segredo;
        }
        else {
            return "Tente Novamente";
        }
    }
}
let senhaCaixaMagica = new caixa("1605nico");
senhaCaixaMagica.abrirCaixa();
console.log(`Caixa: ${senhaCaixaMagica.abrirCaixa()}`);
