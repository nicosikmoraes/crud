class Pessoa {
   readonly id: string = "123";
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    mostraId(){
        console.log(this.id)
    }

}

const ana = new Pessoa("Ana Banana", 131);
console.log(ana);

ana.mostraId();