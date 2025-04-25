
let itexto = document.getElementById('produto');

console.log(itexto);

let spans = document.getElementsByClassName('texto');

console.log(spans);

// Ler valores.
console.log(spans[0])   // Lendo o primeiro valor da váriavel spans.

//Alterar Valores
spans[0].textContent = 'JavaScript'
spans[1].innerHTML = 'Nico'    // Da pra alterar dos dois modos.

let span = document.getElementsByTagName('span')[1];
console.log(span.innerHTML);  //Precisa do .innerHtml para mostrar só o conteúdo.

span.style.textTransform = 'Uppercase';     //Deixar oque tem dentro da váriavel span em letra maiscúla.

let inp = document.querySelector('body div.container input');   //Falamos pra ele pegar o elemento input que está dentro de uma div(container) que está dentro do body.
console.log(inp);                   // Posso colocar só input que iria buscar pela tag.

let eles = document.querySelector('.texto')     //Busca pela classe por causa do "."! Porém buscando pelo querySelector ele apresenta só o primeiro. Se quise todos tem que colcar:
console.log(eles);                                                                                                              let todosEles = document.querySelectorAll('.texto'); 
                                                                                                                                            console.log(todosEles);

let div1 = document.querySelector('#div1')      //Busca elemento por Id.
console.log(div1);

//Exemplo

let btn = document.querySelector('button.btn');
let inp2 = document.querySelector('input');

btn.onclick = function(){
    alert(`O botão foi clicado! ${inp2.value}`);
}