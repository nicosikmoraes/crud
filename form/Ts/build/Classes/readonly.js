"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.id = "123";
        this.nome = nome;
        this.idade = idade;
    }
    mostraId() {
        console.log(this.id);
    }
}
const ana = new Pessoa("Ana Banana", 131);
console.log(ana);
ana.mostraId();
