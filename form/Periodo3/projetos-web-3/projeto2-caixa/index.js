let inp = document.querySelector('input');

let inpValor = document.get

let btn = document.querySelector('.botao'); 

btn.onclick = function(){
    x = inp.value

    cem = (x - x % 100) /100;
    x = (x % 100);

    cinq = (x - x % 50) / 50;
    x = (x % 50);

    dez = (x - x % 10) / 10;
    x = (x % 10);

    cinco = (x - x % 5) / 5;
    x = (x % 5);

    dois = (x - x % 2) / 2;
    x = (x % 2);

    um = x;

   alert(`Valor recebido: ${cem} Nota de cem; ${cinq} Notas de cinquenta; ${dez} Notas de dez; ${cinco} Notas de cinco; ${dois} Notas e dois; ${um} Moedas de um`);

 console.log(cinco);
}

