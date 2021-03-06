require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const ac = require('./controller');
const pc = require('./postCtrl');

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

// USERS
app.post('/auth/register', ac.register);
app.post('/auth/login', ac.login);
app.post('/auth/logout', ac.logout);
app.get('/api/current', ac.getUser)

// POSTS
app.get('/api/posts', pc.getAllPosts);
app.get('/api/post/:id', pc.getPost);
app.post('/api/post', pc.addPost);
app.delete('/api/post/:id', pc.deletePost);
app.put('/api/post/:id', pc.updatePost);