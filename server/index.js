const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const ctrl = require('./controller');

const app = express();

app.use(express.json());



const SERVER_PORT = 4000;
app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} birds flying high!`))