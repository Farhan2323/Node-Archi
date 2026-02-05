///App Setup (Express)
const express = require('express');
const { getAllUsers , createUser} = require('./modules/users/users.controller');
const app = express();
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

//User Routes
app.get('/users', getAllUsers);
app.post('/users', createUser);
app.use(errorHandler);

module.exports = app;