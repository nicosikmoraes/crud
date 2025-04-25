//Métodos: index, show, update, store, destroy.
/*
    index: Listagem de sessões.
    store: Criar uma nova sessão.
    show: Listar um única sessão.
    update: Quando queremos alterar alguma sessão.
    destroy: Quando queremos deletar alguma sessão.
*/

import user from "../models/user";

class SessionController {
   async store(req, res){
        const { email } = req.body; //Esse req.body é lado do user.js e aqui nós estamos pegando apenas o email dele pelo oque eu entendi.

        //Verificando se este usuário já existe. Se não existir criamos um novo.
        let usuario = await user.findOne({ email });

        if(!usuario) {
            usuario = await user.create({ email });
        }


        // let usuario = await user.create({ email }); //Quando a rota for chamada será criado um novo usuario com o email enviado.

        return res.json(usuario);
    }
}

export default new SessionController();