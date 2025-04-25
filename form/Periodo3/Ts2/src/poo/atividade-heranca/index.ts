import carro from "./carro";
import moto from "./moto";
import caminhao from "./caminhao";

let testecarro = new carro(4, 'onix', 'rápido', 2020)
console.log(testecarro.getMarca());

let testemoto = new moto(100, 'harley', 'grande', 2012)
console.log(testemoto.getCilindrada())

let testecaminhao = new caminhao(200, 'chewrollete', 'leve', 2010);
console.log(testecaminhao.getAno())