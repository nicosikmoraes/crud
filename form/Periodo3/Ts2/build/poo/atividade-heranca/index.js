"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = __importDefault(require("./carro"));
const moto_1 = __importDefault(require("./moto"));
const caminhao_1 = __importDefault(require("./caminhao"));
let testecarro = new carro_1.default(4, 'onix', 'rápido', 2020);
console.log(testecarro.getMarca());
let testemoto = new moto_1.default(100, 'harley', 'grande', 2012);
console.log(testemoto.getCilindrada());
let testecaminhao = new caminhao_1.default(200, 'chewrollete', 'leve', 2010);
console.log(testecaminhao.getAno());
