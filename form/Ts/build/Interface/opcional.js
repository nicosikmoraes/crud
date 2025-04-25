"use strict";
const novoUsuario = {
    //nome: "Nicolas", // OPCIONAL!
    email: "nicoalas@gmail.com",
    status: false,
};
console.log(novoUsuario);
function novoUser({ nome, email, status }) {
    console.log(nome);
}
function novoUser1(Propiedades) {
    console.log(Propiedades.email);
}
novoUser({ nome: "Lara", email: "lara@lara.com", status: true });
novoUser1({ nome: "Lara", email: "lara@lara.com", status: true });
// Se deixar o nome "Lara" é a saída se tirar a saída é "Undefined".
