let a = document.querySelector('.link')
//   (document = documento html) (queryselector = função javascript que vai buscar a classe "link").

console.log(a.innerText); // Buscar o texto de dentro do obejto.

console.log(a.parentNode); // Buscar o elemento pai do objeto. - Se refere ao body.

console.log(a.parentNode.parentNode); // Buscar o elemento "avô" do objeto. - Se refere ao Html.

console.log(a.parentNode.parentNode.childNodes); // Aqui vamos ver os elementos que são filhos do Html

console.log(a.parentNode.parentNode.firstChild); // Pegar o primeiro filho. - Aqui seria o Head.

console.log(a.parentNode.parentNode.lastChild); // Para pegar o último filho. - Seria o body.

console.log(a.parentNode.nextSibling); // Da pra pegar irmão tbb, tanto como o próximo quanto o anterior.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mostrarAlerta(){
    alert('O botão foi clicado')    // O alert aparece uma mensagem na sua tela com oq foi escrito
}


function mudarTexto(texto){
    texto.innerHTML = "Estou avisando"
}


function mudarCor(){
    let cores = ['green', 'red', 'black', 'white', 'purple', 'blue', 'yellow', 'orange'];   // Uma array com as cores que podem ser sortidas.

    const numero = Math.floor((Math.random() * cores.length) + 1)   // Serve para sortear um número de 1 a 8 que são as quantidade de cores que temos.
            // Math.floor, arredonda para baixo --- cores.length, Pega em número o tamanho da array nesse caso é 8 já que tem 8 itens.

    document.body.style.backgroundColor = cores[numero]     // A cor do background vai ser mudada para a cor soteada.
}


function escreveTexto(input){
        let span = document.getElementById('texto');     // Aqui fazemos a váriavel span que criamos valer o mesmo que o span do html que tem id 'texto'.

            span.innerHTML = input.value;
}


