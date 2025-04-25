import { Schema, model } from "mongoose"; //Importo apenas oq vamos usar, não precisa importar ele inteiro.

const UserSchema = new Schema ({ //UserSchema Vai rodar a classe Schema. No parenteses fica os parâmetros que serão passados para rodar no Schema.
    email:String,
});

export default model("user", UserSchema);   //Esse UserSchema é o resultado da classe Schema pós os parâmetros passados.