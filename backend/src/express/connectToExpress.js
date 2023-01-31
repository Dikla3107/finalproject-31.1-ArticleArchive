const express = require('express');
const cors = require('cors');
const server = express();


const createArticle = require('./handlers/articles/createOneArticle');
const getAllarticles = require('./handlers/articles/getArticles');
const getArticlesByUserId = require('./handlers/articles/getMyArticles');
const deleteOneArticle = require('./handlers/articles/deleteArticle');
const updateAritcle = require('./handlers/articles/updateArticle');
const getOneByUserIDAndarticleID = require('./handlers/articles/getArticleByUserIdAndArticleId');
const getOneArticle = require('./handlers/articles/getArticleByUserIdAndArticleId');

const getAllUsers = require('./handlers/users/getAllUsers');
const updateUser = require('./handlers/users/updateUsers');
const deleteOneUser = require('./handlers/users/deleteUser');
const signUpUser = require('./handlers/users/registerUser');
const authenticateUser = require('./middlewares/authenticateUser');

const signInUser = require('./handlers/users/signInUser').signInUser;
const signInStatus = require('./handlers/users/signInUser').signInStatus; 
const signInAdmin = require('./handlers/admin/signInAdmin');
const registerAdmin = require('./handlers/admin/registerAdmin');
const getOneUser = require('./handlers/users/findUser');
const resetPassword = require('./handlers/users/reset');

server.use(express.json());
server.use(cors({
    // origin: true,
    origin: 'http://localhost:4200',
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept, token',
}));

server.options('*', (req, res) => {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, token');
    res.setHeader('Access-Control-Max-Age', '3600');
    res.status(204).send();
    next();
});

server.post('/articles/create', authenticateUser, createArticle);
server.get('/articles', getAllarticles);
server.delete('/articles/deleteone/:id', authenticateUser,  deleteOneArticle);
server.put('/articles/updateone', authenticateUser, updateAritcle);
server.get('/articles/findOneArticle', authenticateUser, getOneByUserIDAndarticleID);
server.get('/articles/getMyArticles', authenticateUser, getArticlesByUserId);
server.get('/articles/findarticle', getOneArticle);




server.get('/users', getAllUsers);
server.post('/users/create', signUpUser);
server.post('/users/signin', signInUser);
server.post('/users/signin', signInStatus);
server.delete('/users/deleteone/:id', authenticateUser, deleteOneUser);
server.get('/users/finduser',authenticateUser, getOneUser);
server.put('/users/updateone',authenticateUser, updateUser);
server.post('/user/reset', resetPassword);

server.post('/admin/signin', signInAdmin);
server.post('/admin/create', registerAdmin);

server.listen(4000, () =>{
    ('connected to server')
});