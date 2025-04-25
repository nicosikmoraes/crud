"use strict";
function login(username) {
    let message = "Bem Vindo " + username;
    console.log(message);
    return true;
    // return nicolas; // Poderia ser tambem por ser tanto "boolean" quanto "string".
}
const retornoFuncao = login("Nicolas");
console.log(retornoFuncao);
let n1 = 10;
let n2 = 25;
function soma(valor1, valor2) {
    let soma = valor1 + valor2;
    return soma;
}
console.log(soma(n1, n2)); // Nesse exemplo o "console.log" chama o "return soma" e diz para o function que o valor1 e o valor2 vão ser n1 e n2 (Até por isso que n1 e n2 tem que ser tipado em number), ai o let faz a soma, passa pro return e para o console.log.
// OUTRO EXEMPLO //
let m1 = 10;
let m2 = 25;
function soma2(valor1, valor2) {
    let soma2 = valor1 + valor2;
    if (soma2 > 40) {
        return 'SOMA MAIOR QUE VINTE';
    }
    else {
        return 'MENOR QUE 20';
    }
}
console.log(soma2(m1, m2));
// Arrow Function //
function retornoAPI(url) {
    return url;
} // Essa daqui é uma normal
const retornoAPIAnonima = (url) => {
    console.log("URL da API: ", url);
};
retornoAPIAnonima("https://urlimaginatoriadoalem.com"); // Aqui eu to colocando um valor no objeto da function para realizar testes.
