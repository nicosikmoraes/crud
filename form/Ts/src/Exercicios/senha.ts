class caixa {
  private senhaCaixa: string = "1605nico"
    senhaTeste: string;
   readonly segredo: string = "MichaelJordan"

   public constructor(senhaTeste: string){
   this.senhaTeste = senhaTeste
   }

    public abrirCaixa(){
            if(this.senhaTeste === this.senhaCaixa){
                return this.segredo
            }else{
                return "Tente Novamente"
            }
    }

}


let senhaCaixaMagica = new caixa("1605nico");
senhaCaixaMagica.abrirCaixa()
console.log(`Caixa: ${senhaCaixaMagica.abrirCaixa()}`)