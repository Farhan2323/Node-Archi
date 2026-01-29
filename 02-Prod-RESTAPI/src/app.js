///App Setup (Express)
const express = require('express');
const { getAllUsers } = require('./modules/users/users.controller');
const app = express();

app.get('/users', getAllUsers);

module.exports = app;