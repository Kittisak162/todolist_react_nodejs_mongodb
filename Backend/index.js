const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

require('./db');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => console.log(`App listening on port ${port}!`));
