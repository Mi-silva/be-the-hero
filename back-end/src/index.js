const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();


app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333);

/*
ROTAS E RECURSOS
A rota deve ser bem especificada, através de barras (no local onde está a barra abaixo). O que vem 
após a barra é chamado de recurso, por exemplo /users.

MÉTODOS HTTP
A rota abaixo é acessível pelo método .get

- GET: Buscar uma informação do back-end (quando a gente acessa uma rota no browser e dá enter, ele executa
o método GET).
- POSt: Usado para criar uma informação do back-end. Por exemplo, uma rota que para criar um novo usuário, ela recebe os dados
do usuário, email, senha. Daí utilizamos no lugar do .get, o .post.
- PUT: Para alterar uma informação no back-end.
- DELETE: Para deletar uma informação no back-end.
*/

/*
TIPOS DE PARÂMETROS:
- Query Params: Parâmetros nomeados enviados na rota após o simbolo de interrogação (exemplo: /users?name=Mirelle ou /users?page=2). Geralmente servem para
filtros, paginação
- Route Params: Parâmentros utilizados para identificar um único recurso (exemplo: /users/:id  --> quer dizer
    que tudo que vem depois da barra será chamado de ID do usuário)
- Request body: Corpo da requisição, utilizado para criar ou alterar recursos.

*/