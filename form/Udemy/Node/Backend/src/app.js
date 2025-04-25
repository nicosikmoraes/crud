// Aqui vamos configurar o Express.

//const express = require(`express`); // Aqui importamos o Express para a gente usar.
// Esse const é igual a " import express from 'express'", porém para usar dessa forma precisa baixar uma biblioteca, a sucrase.
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

//const routes = require('./route');  //Aqui temos tudo oq se tem no arquivo route.js
import routes from './route';

class app {

        constructor(){
            this.server = express();

            mongoose.connect('mongodb+srv://nicolas:n16052006!@nico.ixjsc.mongodb.net/devhouse?retryWrites=true&w=majority&appName=Nico', {
                useNewUrlParser: true, //Aparentemente não precisa mais usar isso desde a versão 4.0.0
                useUnifiedTopology: true,
            }) //Aqui é para conectar ao nosso banco de dados

            this.middlewares(); //colocamos aqui dentro do constructor para que quando inicar o servidor eles sejam chamados automaticamente.
            this.routes();
        }

        middlewares(){

            this.server.use(
                '/files',
                express.static(path.resolve(__dirname, '..', 'Uploads'))
            );

            this.server.use(express.json()); //Estamos falando que vamos usar o JSON.
        }

        routes(){
            this.server.use(routes); //Todas as rotas definidas em route.js.
        }

}

 //module.exports = new app().server; //Vamos exportar a nossa classe, porém só queremos exportar o server.
 //mesma coisa - "export default new app().server", porém precisa da biblioteca sucrase para funcionar.
export default new app().server;