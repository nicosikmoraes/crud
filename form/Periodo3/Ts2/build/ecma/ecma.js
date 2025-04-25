"use strict";
// let & const
let seraQuePode = '?';
console.log(seraQuePode);
// Arrow Function
const somar = function (n1, n2) {
    return n1 + n2;
};
function somar2(n1, n2) {
    return n1 + n2;
}
const subtrair = (n1, n2) => n1 - n2; //O retorno está implicito, é uma função anonima.
console.log(somar(2, 4));
console.log(somar2(2, 4));
console.log(subtrair(1, 6));
// This (Arrow Function).
function normalComThis() {
    console.log(`O valor de this é:` /*this*/); // descomentar o this pra funcionar.
}
const normalComThisEspecial = normalComThis.bind(2); // Esse bind significa que o valor passado nesse parametro vai servir com o "this" na função chamada.
normalComThisEspecial();
// This com arrow funcion
console.log(this);
const arrowComThis = () => console.log( /*this*/); // O this da arrow function é o mesmo do this mais próximo dele
arrowComThis();
