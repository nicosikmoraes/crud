"use strict";
/* O que é uma classe?
>> Uma Classe aramzena as caracteríticas e as ações que esse objeto vai possuir.
>> Ou seja um conjunto de atributos e metódos */
class Loja {
    constructor(nome, categoria) {
        this.nome = nome; // O this.(objeto) se refere ao objeto da class, e ele vai receber o parametro referido no constructor, que será preenchido provavelmente pelo user.
        this.categorias = categoria;
    }
    //Método//
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria ${this.categorias}`);
    }
    /*Quando não sabemos a qunatidade que vai receber, no caso seria um Array*/
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo um novo pedido ${pedido}`);
        });
        return `Pedido na mesa: ${mesa}`;
    }
    mudarStatus(status) {
        if (status === "ABERTO") {
            console.log(`LOJA ABERTA COM SUCESSO`);
        }
        else {
            console.log(`LOJA FECHADA!`);
        }
    }
}
const redBurguer = new Loja("RedBurguer", "Hamburgueria");
redBurguer.criarLoja(); // Para mostrar o resultado do método no terminal.(EU ACHO)
const retornoLoja = redBurguer.emitirPedido(23, "Lasanha", "Suco de laranja", "Petit Gateu"); // Aqui nós vamos armazenar em "retornoLoja" o resultado do método "emitirPedido".
console.log(retornoLoja);
redBurguer.mudarStatus("ABERTO");
const loja2 = new Loja("Sorvetes Gelatos", "Soreveteria");
loja2.criarLoja();
console.log(redBurguer.nome);
console.log(redBurguer.categorias);
// Métodos são ações que as classes podem ter. //
