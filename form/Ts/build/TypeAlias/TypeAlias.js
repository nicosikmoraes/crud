"use strict";
function acessar(uuid, nome) {
    console.log(`ID: ${uuid}, Seja bem vindo ${nome}`);
}
function logUsuario(uuid) {
    console.log(`Conta referente ao UUID: ${uuid}`);
}
acessar(123, "Matheus");
acessar("55", "Nicolas");
logUsuario("132");
function comprarItem(moeda) {
    console.log("Comprando com a moeda: ", moeda);
}
comprarItem("USD");
