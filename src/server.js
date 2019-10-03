const express = require('express');
const mongoose = require('mongoose');

// Add dotenv to read .env keys and values
const dotenv = require('dotenv');
dotenv.config();

const routes = require('./routes');

const app = express();

mongoose.connect(process.env.DBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// GET, POST, PUT, DELETE
// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição e delete)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(express.json());
app.use(routes);

app.listen(3333);
