"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globais_1 = __importDefault(require("./globais"));
class caminhao extends globais_1.default {
    constructor(cargaMaxima, marca, modelo, ano) {
        super(marca, modelo, ano);
        this.cargaMaxima = cargaMaxima;
    }
    getCargaMaxima() {
        return this.cargaMaxima;
    }
}
exports.default = caminhao;
