const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const app = express();

app.use(cors()); //definir quem pode acessar o backend.
app.use(express.json());
app.use(routes);

app.listen(3333);