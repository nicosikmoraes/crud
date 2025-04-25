
    let btn = document.querySelector('.botao');

   btn.onclick = function(){
        let aux = 0;
        for (let i = 1; i <= 100; i++)
            aux = i + aux;
        alert(aux);
    };

    


