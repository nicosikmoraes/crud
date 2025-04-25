"use strict";
class velocidade {
    constructor(quantidadeCaracteres, tempo) {
        this.velocidade = 0;
        this.quantidadeCaracteres = quantidadeCaracteres;
        this.tempo = tempo;
    }
    velocidadeMedia() {
        this.velocidade = this.quantidadeCaracteres / (this.tempo / 60);
        console.log(this.velocidade);
        return this.velocidade;
    }
}
const media = new velocidade(300, 120);
media.velocidadeMedia();
console.log(media);
