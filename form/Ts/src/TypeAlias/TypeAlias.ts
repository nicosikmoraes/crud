

                type Uuid = number | string | null;
        
        
        function acessar(uuid: string| number | null, nome: string){
            console.log(`ID: ${uuid}, Seja bem vindo ${nome}`);
        }

        function logUsuario(uuid: Uuid){
            console.log(`Conta referente ao UUID: ${uuid}`)
        }

        acessar(123, "Matheus")

        acessar("55", "Nicolas")

        logUsuario("132")

        //OUTRO EXEMPLO//

        type Moedas = "BRL" | "EUR" | "USD";

        function comprarItem (moeda: Moedas) {
            console.log( "Comprando com a moeda: ",moeda);
        }

        comprarItem("USD");