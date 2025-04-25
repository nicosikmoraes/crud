export default class calculadora {

        public calculo(){
            let aux: number = 0;

            for (let i = 1; i <= 100; i++ )
                aux = i + aux;
                    return aux;
        }

}

const calculando = new calculadora();
console.log(calculando.calculo())