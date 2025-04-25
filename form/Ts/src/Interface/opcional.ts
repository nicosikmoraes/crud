

    interface ICadastroProps{
        nome?: string;
        email: string;
        status: boolean;
    }

    const novoUsuario: ICadastroProps = {
        //nome: "Nicolas", // OPCIONAL!
        email: "nicoalas@gmail.com",
        status: false,
    }

    console.log(novoUsuario);

     function novoUser ({ nome, email, status}: ICadastroProps){ // De forma desconstruida.
         console.log (nome)
   }

    function novoUser1 (Propiedades: ICadastroProps){ // Acredito que a forma mais usada.
        console.log (Propiedades.email)
  }

    novoUser({nome: "Lara", email: "lara@lara.com", status: true}) 
    novoUser1({nome: "Lara", email: "lara@lara.com", status: true}) 
    // Se deixar o nome "Lara" é a saída se tirar a saída é "Undefined".