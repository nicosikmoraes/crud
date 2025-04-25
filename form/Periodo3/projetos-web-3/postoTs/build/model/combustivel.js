"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Combustivel {
    constructor() {
        const gasolina = "Combustivel";
        const etanol = "Combustivel";
    }
    getPrecoEtanol() {
        return this.precoEtanol;
    }
    setPrecoEtanol(newPreco) {
        this.precoEtanol = newPreco;
    }
    getPrecoGasolina() {
        return this.precoGasolina;
    }
    setPrecoGasolina(newPreco) {
        this.precoGasolina = newPreco;
    }
}
exports.default = Combustivel;
