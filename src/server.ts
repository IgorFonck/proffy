import express from 'express';

const app = express();

// Cria a rota /users na aplicação
// request: informações sobre a requisição (cabeçalho, corpo...)
app.get("/users", (request, response) => {
  const users = [
    { name: 'Diego', age: 25 },
    { name: 'Juliana', age: 22 },
    { name: 'Igor', age: 25 }
  ]
  return response.json(users);
});

// Faz a aplicação ouvir requisições HTTP
app.listen(3333);

