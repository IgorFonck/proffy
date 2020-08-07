import express from 'express';

const app = express();

// Utilizar formato JSON no express
app.use(express.json());

// Cria a rota /users na aplicação
// request: parâmetros da requisição (cabeçalho, corpo...)
app.get("/", (request, response) => {
  return response.json({ message: 'Hello World' });
});

// Faz a aplicação ouvir requisições HTTP
app.listen(3333);

