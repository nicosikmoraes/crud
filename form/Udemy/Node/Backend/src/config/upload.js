import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
            destination: path.resolve(__dirname, '..', '..', 'Uploads'), // O caminho onde a imagem será enviada.
            filename: (req, file, cb) => {
                const ext = path.extname(file.originalname);
                const name = path.basename(file.originalname, ext)

                cb(null, `${name}-${Date.now()}${ext}`) //O nome da imagem.
            }, 
    })
};