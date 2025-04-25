class velocidade {
    quantidadeCaracteres: number;
    tempo: number;
    velocidade: number = 0

    constructor(quantidadeCaracteres: number, tempo: number){
            this.quantidadeCaracteres = quantidadeCaracteres;
            this.tempo = tempo;
    }

    public velocidadeMedia(): number{
        this.velocidade = this.quantidadeCaracteres/(this.tempo/60);
        console.log(this.velocidade)
        return this.velocidade 
    }
}

const media = new velocidade(300, 120);
media.velocidadeMedia()
console.log(media)