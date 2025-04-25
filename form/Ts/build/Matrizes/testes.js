"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testando {
    constructor(n) {
        this.n = n;
    }
    Setn(n) {
        this.n = this.modulo(n);
    }
    modulo(n) {
        if (n < 0)
            n = -n;
        return n;
    }
    GetDivisores() {
        let contador = 1;
        for (let i = 2; i <= this.n / 2; i++)
            if (this.n % i == 0) {
                contador++;
            }
        ;
        if (this.n != 1)
            contador++;
        return contador;
    }
    getMatDivisores() {
        let divisores = [1];
        for (let i = 2; i <= (this.n / 2); i++)
            if (this.n % i == 0)
                divisores.push(i);
        if (this.n != 1)
            divisores.push(this.n);
        return divisores;
    }
}
exports.default = testando;
let validar = new testando(10);
validar.Setn(20);
console.log(validar.GetDivisores());
console.log(validar.getMatDivisores());
