

function cadastro(email: string, senha: string, nome = "Aluno", idade?: number): void{
    let data = {email, senha, nome, idade};

     console.log(data);
}

cadastro("teste@gmail.com", "123123",);  

// Rest Params //

    // Exemplo normal
//function totalVendas(venda1: number, venda2: number, venda3: number, venda4: number){
   // const total = venda1 + venda2 + venda3 + venda4;

   // console.log(total);

   // return total;
//}

//totalVendas (10, 20, 30, 40);
 
    //Rest

    function totalVendas(...vendas: number[]): void {
            const quantidadeVendas = vendas.length;
            console.log(`Voce fez ${quantidadeVendas} vendas hoje`)
    }

    totalVendas (10, 20, 30)

    // Rest

    function mostraNomes(...nome: string[]){

let totalNomes = nome.length;
        console.log(nome);

        nome.map (nome => {
            console.log(nome);
        })
    }

    mostraNomes ("Nicolas", "Lara", "Papai Noel")