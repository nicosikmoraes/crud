class maiores {
    a: number;
    b: number;
    c: number;
    x: number = 0;

    constructor(a: number, b: number, c: number){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public maioral(){
        if(this.b > this.c){
            this.x = this.b;
            this.b = this.c;
            this.c = this.x;
        }
        if(this.a > this.b){
            this.x = this.a;
            this.a = this.b;
            this.b = this.x;
        }
        if(this.b > this.c){
            this.x = this.b;
            this.b = this.c;
            this.c = this.x;
        }
    }

    public saida(){
        this.maioral
        console.log(this.a, this.b, this.c)
    }
}

const testando = new maiores(8, 6, 2);
testando.maioral()
console.log(testando)

