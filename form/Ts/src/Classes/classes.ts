

        /* O que é uma classe?
        >> Uma Classe aramzena as caracteríticas e as ações que esse objeto vai possuir.
        >> Ou seja um conjunto de atributos e metódos */

            type Status = "ABERTO" | "FECHADO";

        class Loja{
            // Primeira coisa é declarar os atributos da nossa classe.
            nome: string;
            categorias: string;

            constructor(nome: string, categoria: string){ // Esse atributo aqui ainda não tem relação com o obejto de cima, ele só serve para o escopo do constructor.
                this.nome = nome;       // O this.(objeto) se refere ao objeto da class, e ele vai receber o parametro referido no constructor, que será preenchido provavelmente pelo user.
                this.categorias = categoria;        
            }

            //Método//
                criarLoja(): void{ // É um caso sem parâmetro.
                    console.log(`Loja ${this.nome}, categoria ${this.categorias}`)            
                }

                                             /*Quando não sabemos a qunatidade que vai receber, no caso seria um Array*/
                emitirPedido(mesa: number, ...pedidos: string[]): string {

                    pedidos.map ((pedido) => { // Aqui nós criamos um looping que vai rodar até receber todos os pedidos.
                            console.log(`Saindo um novo pedido ${pedido}`)
                    })

                    return `Pedido na mesa: ${mesa}`;
                } 

                mudarStatus(status: Status): void{
                    if(status === "ABERTO"){
                        console.log(`LOJA ABERTA COM SUCESSO`)
                    }else{
                        console.log(`LOJA FECHADA!`);
                    }
                }

        }

               

            const redBurguer = new Loja("RedBurguer", "Hamburgueria");

            redBurguer.criarLoja() // Para mostrar o resultado do método no terminal.(EU ACHO)

                const retornoLoja = redBurguer.emitirPedido(23, "Lasanha", "Suco de laranja", "Petit Gateu"); // Aqui nós vamos armazenar em "retornoLoja" o resultado do método "emitirPedido".
                console.log(retornoLoja);

                redBurguer.mudarStatus("ABERTO");

            const loja2 = new Loja("Sorvetes Gelatos", "Soreveteria")

            loja2.criarLoja()

            console.log(redBurguer.nome)
            console.log(redBurguer.categorias)

            // Métodos são ações que as classes podem ter. //