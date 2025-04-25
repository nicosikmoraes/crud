"use strict";
function mostraPromocao(preco) {
    console.log(`Promoção no curso por apenas: R$ ${preco}`);
}
const novoCurso = {
    id: "1",
    nome: "Teste",
    preco: 150,
    promocao: mostraPromocao // Estamos essa função para o objeto(novoCurso) que segue a tipagem da interface(ICursoProps)
};
console.log(novoCurso); // Aqui aparece todos os atributos.
console.log(novoCurso.promocao(350)); // Pós o "." eu posso escolher qualquer um dos valores que eu adicionei acima.
