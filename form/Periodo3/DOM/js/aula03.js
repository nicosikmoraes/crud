
// Nessa seção é visto como adicionar e excluir elementos no arquivo html.

let btn = document.querySelector('#add');

///////////// Inicio da função criarParágrafo //////////////////////////////////////////////////////////////////////////////////////////////////////

btn.onclick = function(){
    let textElement = '';

    let input = document.querySelector('input').value;           // O value vai fora, isso aqui é importante saber.

    let pElement = document.createElement('p');                  // Estamos criando um parágrafo.

    pElement.setAttribute('class', 'classe-p');                  // Um atibuto de classe foi adicionado do <p> </p> criado e depois foi adicionado classe-p sendo o nome dessa classe.

    if(input !== ""){
        textElement = document.createTextNode(input)             // Aqui Setamos o valor de textElement.
    }else{
        textElement = document.createTextNode('Escreva algo...')   
    }

             pElement.appendChild(textElement);                  // Adicionamos o texto ao <p></p>. Comando appendChild para criar oq for pedido como filho do que chamou.


            let divElement = document.querySelector('.app');     // Buscamos a div em que queremos colocar o pElement.

            divElement.appendChild(pElement);                    // Cria o <p></p> dentro da div qeu chamamos antes.

            document.querySelector('input').value = '';          // Pra limpar o input.

}

///////////// Fim da função criarParágrafo //////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////// Inicio da função removerBotao /////////////////////////////////////////////////////////////////////////////////////////////////////

    function removerBotao(btn){  //Esse btn é o própio botão que é passado por causa do (this).
     // Recuperando a div.
     let divElement = document.querySelector('.papi');

     //Remove o filho selecionado.
     divElement.removeChild(btn);
    
}