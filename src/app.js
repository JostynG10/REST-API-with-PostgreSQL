const express = require('express');
const { json } = require('express');
const morgan = require('morgan');

// Importing routes
const registerRoutes = require('@routes/register');
const loginRoutes = require('@routes/login');
const messageRoutes = require('@routes/requestsMessages');
const userRoutes = require('@routes/requestsUser');

// Initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/register', registerRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/requests/messages', messageRoutes);
app.use('/api/requests/user', userRoutes);

module.exports = app;