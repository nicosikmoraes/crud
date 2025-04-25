class cpf {
    cpf: number;
    verificador: boolean | number = 0
    verificadorBoolean: boolean = false;
    constructor(cpf: number){
        this.cpf = cpf;
    }

    public etapa1(){
        this.verificador = Math.trunc(this.cpf / 10000000000);
            if(this.verificador < 1 /*, this.verificador > 10*/){
                this.verificadorBoolean = false
            }else{
                this.verificadorBoolean = true};
                if(this.verificador > 10){
                    this.verificadorBoolean = false
                }
        console.log(this.verificadorBoolean);
    }
}

const verificadorCPF = new cpf(10000000000);
verificadorCPF.etapa1()