"use strict";
// Herança, a classe filha herda os atributos da classe pai.
class Usuario {
    constructor(nome, email, id) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
//Supor que essa classe (Admin) herda as caracteríticas da classe Usuario.
class Admin extends Usuario {
    constructor(id, cargo, nivel, nome, email) {
        // O super serve para "chamar" o construtor da classe pai, tem que ser chamado por primeiro.
        super(nome, email, id);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo(cargo) {
        console.log(`Alterando cargo para: `, cargo);
        console.log("ID do Usuário; ", this.id);
    }
    acessarAdmin() {
        this.mudarCargo("Designer");
    }
}
const usuario1 = new Admin(1023, "Administrador", 10, "Nicolas", "Nicolas@gmail.com");
console.log(usuario1);
console.log(usuario1.nome);
usuario1.cargo = "Designer"; //Eu posso altera pois ele é publico.
usuario1.acessarAdmin();
/*
  ENCAPSULAMENTO, 4 MODIFICADORES: Public (Todos podem modificar e acessar), // Se não tiver nada ele é automaticamnete publico.
  Private (Não pode ser acessado ou alterado),
  Protected (Pode ser acessado ou modifcado apenas dentro da sua classe ou de uma classe que o herdou),
  Readonly (Só pode acessar o atributo, NÃO pode moficá-lo).
*/ 
