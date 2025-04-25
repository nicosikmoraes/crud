"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Operations {
    constructor(control) {
        this.control = control;
    }
    calcularCombustivel(precoEtanol, precoGasolina, nome) {
        let resultado = (precoEtanol / precoGasolina);
        if (resultado < 0.7) {
            console.log(`No posto ${nome} compensa mais o etanol, ${resultado}`);
        }
        else {
            console.log(`No posto ${nome} compensa mais a gasolina, ${resultado}`);
        }
    }
}
exports.default = Operations;
