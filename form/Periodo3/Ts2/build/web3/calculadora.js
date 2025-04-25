"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class calculadora {
    calculo() {
        let aux = 0;
        for (let i = 1; i <= 100; i++)
            aux = i + aux;
        return aux;
    }
}
exports.default = calculadora;
const calculando = new calculadora();
console.log(calculando.calculo());
