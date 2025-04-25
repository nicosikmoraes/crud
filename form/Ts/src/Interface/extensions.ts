

    /* Vamos supor que temos um jogo e esse jogo pode ter uma dlc */


    interface IJogoProps {
        readonly id : string;
        nome: string;
        descricao?: string;
        plataforma: string [];
    }

    const left4dead: IJogoProps = {
        id: "123",
        nome: "Left4dead2",
        plataforma: ["PS5", "Xbox", "Pc"]
    }

    // console.log (left4dead);

        interface IDLC extends IJogoProps{  // Com o "extends" a nova interface adquire todos os atributos da interface chamada.
                novoConteudo:  string[];
        }

        const left4deadDLC: IDLC = {
            novoConteudo: ["Tiros", "Correr", "Novos mapas"],
            id: "123",
            nome: "Left4dead2",
            plataforma: ["PS5", "Xbox", "Pc"]
        }
    
console.log(left4deadDLC);