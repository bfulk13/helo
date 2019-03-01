require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl = require('./controller');

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

const app = express();

app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 48
    }
}))

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db);
    console.log('db connected')
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} birds flying high!`))
})

app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login);
app.post('/auth/logout', ctrl.logout);

app.get('/api/current', ctrl.getUser)
