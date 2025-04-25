"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const combustivel_1 = __importDefault(require("./combustivel"));
class Posto extends combustivel_1.default {
    getNome() {
        return this.nome;
    }
    setNome(newNome) {
        this.nome = newNome;
    }
}
exports.default = Posto;
