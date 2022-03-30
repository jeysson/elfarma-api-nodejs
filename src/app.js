const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
const usuarioRoute = require('./routes/usuarioRoute');

require("dotenv-safe").config();

app.use(express.json());

app.use('/', index);
app.use('/persons', personRoute); 
app.use('/api/usuario', usuarioRoute);
module.exports = app; 