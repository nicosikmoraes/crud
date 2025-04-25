"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globais_1 = __importDefault(require("./globais"));
class moto extends globais_1.default {
    constructor(cilindrada, marca, modelo, ano) {
        super(marca, modelo, ano);
        this.cilindrada = cilindrada;
    }
    getCilindrada() {
        return this.cilindrada;
    }
}
exports.default = moto;
