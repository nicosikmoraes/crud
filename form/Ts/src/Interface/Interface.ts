
//let loja: object;

    //loja = {
        //nome: "BK";
        //endereco: "Rua X";
        //status: true;
    //}

    //INTERFACE

    interface ILojaProps{
        nome: string;
        endereco: string;
        status: boolean;
    }

    const BurguerK: ILojaProps = { // ctrl + espaço --> te da sugestões
          nome: "BurguerK",         // A interface faz com que o BurgueK(Objeto) tenha que seguir o que foi proposto nela, nesse caso um nome(String), endereco(String), Status(Boolean).
          endereco: "Rua das Flores",
          status: true,
    }

   // console.log(BurguerK);

    function novaLoja({nome, endereco, status}: ILojaProps): void{ // Aqui nós passamos os objeto e tipamos com a Interface
        console.log (`Loja ${nome} criada com sucesso!`);
        console.log (`Endereço ${endereco} criada com sucesso!`);
        console.log (`Status: ${status}`);
    }

    novaLoja ({nome: "SubWay", endereco: "Rua X", status: true });