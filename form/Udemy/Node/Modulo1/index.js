const express = require ('express'); /* Esse express foi uma biblioteca que nós baixamos. */

const server = express();

server.use(express.json()); //Precisa desse comando para usar post, para o "cliente" nos enviar oq foi requerido em Json.

const cursos = ['Node JS', 'JavaScript', 'React Native'];

//MIDDLEWARE GLOBAL
server.use((req, res, next)=> { //Esse next faz com que siga o fluxo.
        console.log('REQUISIÇÃO CHAMADA');

        return next();
})

//MIDDLEWARE QUE VAI VERIFICAR SE NO PUT ESTÁ SENDO ENVIADO UM NOME, CASO NÃO ELE IRÁ BARRAR.

function checkCurso(req, res, next){
    if(!req.body.name){ // A "!" significa "se não tiver".
            return res.status(400).json({error: "Nome do curso é obrigatório!"});
    }

    return next();
}

//Agora vai checar se está sendo enviado um index

function checkIndexCurso(req, res, next){
    const curso = cursos[req.params.index] // Aqui se tiver sido colocado o index ele irá pra dentro do curso.
        if(!curso){ //Podia ser assim tbb, if(!cursos[req.params.index]){...}
            return res.status(400).json({error: "O usuário não existe!"});
        }

        req.curso = curso //Criamos uma variável req que equivale ao curso escolhido.

        return next();
}

//READ//

server.get ('/cursos', (req, res) => {
        return res.json(cursos);
});

//Queremos que ele acesse a rota localhost:3000/curso
server.get('/cursos/:index', checkIndexCurso, (req, res) => {

        const { index } = req.params;

        return res.json(cursos[index]/*req.curso (funciona tbb)*/);

}) /* Vamos criar uma rota do tipo GET */

//CRIAR//

server.post('/cursos', checkCurso, (req, res)=> {
    const { name } = req.body; /* Vamos esperar que o cliente nos envie um nome, estamos usando o request body. */
     cursos.push(name); /* Como cursos é uma array aqui nós enviamos a o nome que recebemos do cliente para dentro da array cursos. */

      return res.json(cursos);
})

//ATUALIZANDO

server.put('/cursos/:index', checkCurso, checkIndexCurso, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
})

//EXCLUINDO

server.delete('/cursos/:index', checkIndexCurso, (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);
    return res.json(cursos);
}) 



server.listen(3000); /* Aqui estamos definindo uma porta para o server rodar. */