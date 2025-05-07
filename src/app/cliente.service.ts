import { Injectable } from '@angular/core';
import Cliente from './cadastro/cliente';

@Injectable({   //Isso aqui é um decorator, ele adiciona funcionalidades na classe que estamos criando.
  providedIn: 'root'  //Ele está no root da aplicação.
})  //Ele serve para instaciar o server para podermos usar ele onde quisermos.

export class ClienteService {

  constructor() { }

        //quando é static significa que eu posso acessar de qlqr lugar
      static REPO_CLIENTES = "_CLIENTES"
        //Basicamente o nome do Local Storage  

  salvar(cliente: Cliente){
    //Pegamos quem é o nosso Storage.
    const storage = this.obterStorage()
    //Adicionando o item para a array
      storage.push(cliente)

      localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage))
  }

  
  atualizar(cliente: Cliente){
      const storage = this.obterStorage();
        // O forEach percorre cada item da lista
      storage.forEach(c => {
        if(c.id === cliente.id){
            //Aqui eu defino que vai ser passado para o "c" todos os valores de cliente. 
          Object.assign(c, cliente);
        }
      })
      localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  } 


      //Esse obter storage funciona literalmente para obtermos ele para podermos adicionar itens,
      // atulizar, modificar o "banco de dados" quando necessário. Vai ser muito usado
  private obterStorage(): Cliente[] {
      const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES)
          if(repositorioClientes){
                    // O parse recebe uma string e transforma em uma array
              const clientes: Cliente[] = JSON.parse(repositorioClientes);
              return clientes;
          }
        const clientes: Cliente[] = [];
                        // O stringfly transforma uma array JSON em string
        localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes))
        return clientes
  }



  public pesquisarCliente(nomeBusca: string): Cliente[]{
    const clientes = this.obterStorage();

    if(!nomeBusca){
        return clientes;
    }

    //Esse método vai retornar uma nova array com os dados filtrados
    return clientes.filter(cliente => cliente.nome?.indexOf(nomeBusca) !== -1)
  }

  buscarClientePorId(id: string): Cliente | undefined {
      const clientes = this.obterStorage();
        //O find é para encontramos apenas um elemento
      return clientes.find( cliente => cliente.id === id)
  }


}
