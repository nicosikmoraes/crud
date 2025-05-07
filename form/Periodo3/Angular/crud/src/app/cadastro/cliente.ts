import { v4 as uuid, v4 } from 'uuid'
//Esse as serve para dar um apelido ao o objeto que foi importado

export default class Cliente {
   public id?: string;
   public nome !: string;
   public cpf!: string;
   public dataNascimento!: string;
   public email !: string;

   static newCliente(){   //Em poo isso aqui fica no MainController.
    const cliente = new Cliente();
    cliente.id = uuid()

    return cliente;
   }

   public getId(){
    return this.id
   }


}