//Caso de uso de um JOGO

class jogo {
    private servidor: string;
    private id: string ="1342"

    constructor(servidor: string){
        this.servidor = servidor;
    }

    //Método GET = para pegar o valor ao inves de acessar diretamente a propriedade. // SET = Para alterar.

    get getServidor(){
        console.log("== MÈTODO GET ==");
        return this.servidor;
    }


    //Método SET = Passar / Alterar algum atributo
    set setServidor(novoIP: string){
        if(this.servidor === novoIP){
            throw new Error("O novo IP deve ser diferente do IP antigo")
        }
            this.servidor = novoIP
    }

}


    const gta5 = new jogo("135.456.894.10");
    

    gta5.setServidor = "135.456.456.54"

 
console.log(gta5.getServidor);
console.log(gta5)
