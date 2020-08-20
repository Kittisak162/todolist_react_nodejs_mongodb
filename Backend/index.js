require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

require('./db');
require('./models/todo');

const todoRouter = require('./routes/todo');

const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(`${process.env.BASE_API}/todo`, todoRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));
