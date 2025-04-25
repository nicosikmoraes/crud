

    interface ICursoProps{
        id: string;
        nome: string;
        preco: number;

          //Definir apenas a função e o que ela vai deve esperar e retornar.
            promocao: (preco: number) => void // Pós a flechinha é o que seria o retorno, nesse caso é void vulgo nenhum.

    }


    function mostraPromocao(preco: number): void { // O "void", Aqui é onde coloca o retorno, nessa caso é nenhum, por isso VOID
        console.log (`Promoção no curso por apenas: R$ ${preco}`);
    }

    const novoCurso: ICursoProps = {
        id: "1",
        nome: "Teste",
        preco: 150,
        promocao: mostraPromocao // Estamos essa função para o objeto(novoCurso) que segue a tipagem da interface(ICursoProps)
    }

    console.log(novoCurso) // Aqui aparece todos os atributos.
    console.log (novoCurso.promocao(350)) // Pós o "." eu posso escolher qualquer um dos valores que eu adicionei acima.