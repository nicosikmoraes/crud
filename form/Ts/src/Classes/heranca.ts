

        // Herança, a classe filha herda os atributos da classe pai.

        class Usuario{
               protected id: number; // Podemos chamar na classe pai ou na filhas.
               public nome: string;
               public email: string;

                constructor(nome: string, email: string, id: number){
                    this.id = id;
                    this.nome = nome;
                    this.email = email;
                }

        }


            //Supor que essa classe (Admin) herda as caracteríticas da classe Usuario.
        class Admin extends Usuario{
              public cargo: string;
               public nivel: number;

                constructor(id: number, cargo: string, nivel: number, nome:string, email: string){
                            // O super serve para "chamar" o construtor da classe pai, tem que ser chamado por primeiro.
                        super(nome, email, id);
                    
                    this.cargo = cargo;
                    this.nivel = nivel;
                }

                protected mudarCargo(cargo: string): void{
                        console.log(`Alterando cargo para: `, cargo );
                        console.log("ID do Usuário; ", this.id);
                }

                acessarAdmin(){
                    this.mudarCargo("Designer")
                }


        }


        const usuario1 = new Admin(1023, "Administrador", 10, "Nicolas", "Nicolas@gmail.com");
                console.log(usuario1);
                console.log(usuario1.nome);
                
                usuario1.cargo = "Designer" //Eu posso altera pois ele é publico.
                
                usuario1.acessarAdmin();

                /*
                  ENCAPSULAMENTO, 4 MODIFICADORES: Public (Todos podem modificar e acessar), // Se não tiver nada ele é automaticamnete publico.
                  Private (Não pode ser acessado ou alterado),
                  Protected (Pode ser acessado ou modifcado apenas dentro da sua classe ou de uma classe que o herdou),
                  Readonly (Só pode acessar o atributo, NÃO pode moficá-lo).
                */