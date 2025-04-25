"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class atributosComuns {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    getMarca() {
        return this.marca;
    }
    getModelo() {
        return this.modelo;
    }
    getAno() {
        return this.ano;
    }
}
exports.default = atributosComuns;
