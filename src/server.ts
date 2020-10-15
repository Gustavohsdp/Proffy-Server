import express from 'express';
import cors from 'cors';
import routes from './routes';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//Porta que meu navegador irá utilizar
//localhost:3333/users
app.listen(3333);
