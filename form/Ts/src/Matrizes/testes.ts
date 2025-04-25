export default class testando {
        private n: number;

        constructor(n: number){
            this.n = n;
        }

        public Setn(n: number){
               this.n = this.modulo(n) 
        }

        public modulo(n: number): number {
            if (n < 0)
              n = -n;
        
            return n;
          }

            public GetDivisores(): number{
                    let contador  = 1;

              for(let i = 2; i <= this.n/2; i++)
                if( this.n % i == 0){
                    contador++;
                };

                if(this.n != 1)
                    contador++;
                
                return contador                
            }

            
  public getMatDivisores(): number[] {
    let divisores: number[] = [1];

    for (let i = 2; i <= (this.n / 2); i++)
      if (this.n % i == 0)
        divisores.push(i);

    if (this.n != 1)
      divisores.push(this.n);

    return divisores;
  }

}

let validar = new testando(10);
validar.Setn(20)
console.log(validar.GetDivisores())
console.log(validar.getMatDivisores())