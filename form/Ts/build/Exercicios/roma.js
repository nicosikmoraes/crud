"use strict";
class roma {
    constructor(numero) {
        this.dezenaconta = 0;
        this.dezenas = 0;
        this.unidades = 0;
        this.numero = numero;
    }
    dezena() {
        this.dezenaconta = Math.trunc(this.numero / 10);
    }
    unidade() {
        this.unidades = this.numero - (this.dezenaconta * 10);
    }
    dezenaromano(dezenaconta = this.dezenaconta) {
        if (dezenaconta === 1) {
            this.dezenas = "X";
        }
        else {
            if (dezenaconta === 2) {
                this.dezenas = "XX";
            }
            else {
                if (dezenaconta === 3) {
                    this.dezenas = "XXX";
                }
                else {
                    if (dezenaconta === 4) {
                        this.dezenas = "XL";
                    }
                    else {
                        if (dezenaconta === 5) {
                            this.dezenas = "L";
                        }
                        else {
                            if (dezenaconta === 6) {
                                this.dezenas = "LX";
                            }
                            else {
                                if (dezenaconta === 7) {
                                    this.dezenas = "LXX";
                                }
                                else {
                                    if (dezenaconta === 8) {
                                        this.dezenas = "LXXX";
                                    }
                                    else {
                                        if (dezenaconta === 9) {
                                            this.dezenas = "XC";
                                        }
                                        else {
                                            if (dezenaconta === 10) {
                                                this.dezenas = "C";
                                            }
                                            else {
                                                this.dezenas = "";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    unidadeRomana() {
        if (this.unidades === 1) {
            this.unidades = "I";
        }
        else {
            if (this.unidades === 2) {
                this.unidades = "II";
            }
            else {
                if (this.unidades === 3) {
                    this.unidades = "III";
                }
                else {
                    if (this.unidades === 4) {
                        this.unidades = "IV";
                    }
                    else {
                        if (this.unidades === 5) {
                            this.unidades = "V";
                        }
                        else {
                            if (this.unidades === 6) {
                                this.unidades = "VI";
                            }
                            else {
                                if (this.unidades === 7) {
                                    this.unidades = "VII";
                                }
                                else {
                                    if (this.unidades === 8) {
                                        this.unidades = "VIII";
                                    }
                                    else {
                                        if (this.unidades === 9) {
                                            this.unidades = "IX";
                                        }
                                        else {
                                            if (this.unidades === 10) {
                                                this.unidades = "X";
                                            }
                                            else {
                                                this.unidades = "";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    /* public unidadeRomana(): void{
       switch (this.unidades){
         case 1:
           this.unidades = "I";
         case 2:
           this.unidades = "II";
         case 3:
           this.unidades = "III";
         case 4:
           this.unidades = "IV";
         case 5:
           this.unidades = "V";
         case 6:
           this.unidades ="VI";
         case 7:
           this.unidades ="VII";
         case 8:
           this.unidades = "VIII";
         case 9:
           this.unidades = "IX";
       }
       this.unidades = "X";
     }*/
    saida() {
        this.dezena();
        this.unidade();
        this.dezenaromano();
        this.unidadeRomana();
        console.log(`Na roma sera: ${this.dezenas}${this.unidades}`);
    }
}
const teste = new roma(80);
teste.saida();
console.log(teste);
