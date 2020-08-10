import express from 'express';
import routes from './routes';

const app = express();

// Utilizar formato JSON no express
app.use(express.json());
app.use(routes);

// Faz a aplicação ouvir requisições HTTP
app.listen(3333);

