

interface ITecnologiaProps {
    id: string;
    nome: string;
    slug?: string [];
}

let tecnologia1: ITecnologiaProps = {
    id: "123",
    nome: "Nico",
    slug: ["php", "microondas"]
}

interface IArrayInterface {
    id2: string;
    nome2: string;
    descricao?: string;
}

interface INomes {
    tecnologia: IArrayInterface[];
}

    let frontend: INomes = {
        tecnologia: [
            {id2: "123", nome2: "Lara", descricao: "Show da bola" },
            {id2: "2323", nome2: "Abebe Bikila"}
        ]
    }

    console.log(frontend.tecnologia)