export default class atributosComuns {
       private marca: string;
       private modelo: string;
       private ano: number;

        constructor( marca: string, modelo: string, ano: number){
            this.marca = marca;
            this.modelo = modelo;
            this.ano = ano;
        }

        public getMarca(): string{
            return this.marca;
        }

        public getModelo(): string{
            return this.modelo;
        }

        public getAno(): number{
            return this.ano;
        }
}