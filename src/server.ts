import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors);
// Utilizar formato JSON no express
app.use(express.json());
app.use(routes);

// Faz a aplicação ouvir requisições HTTP
app.listen(3333);

