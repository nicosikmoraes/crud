import { Router } from "express"; // Aqui importamos apenas o Router do express.

import SessionController from "./controllers/SessionController";
import HouseController from "./controllers/HouseController";
import multer from "multer"; // Enviar uma img
import uploadConfig from "./config/upload";  // Enviar uma img

const routes = new Router();
const upload = multer(uploadConfig); // Tudo que envolver isso é para enviar uma imagem

routes.post('/sessions', SessionController.store); //Quando entrar nessa rota ele irá chamar o SessionController com a função store.

routes.post('/houses', upload.single('thumbnail'), HouseController.store);

routes.get('/houses', HouseController.index);
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update );

module.exports = routes; // Estamos exportando as rotas.