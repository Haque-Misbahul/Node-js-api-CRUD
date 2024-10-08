const express = require('express');
const bodyParser = require('body-parser');

// local Imports
const connectDb = require('./db.js');
const employeeRoutes = require('./controllers/employee.controller');
const {errorHandler} = require('./middlewares');

const app =express();

//Middleware
app.use(bodyParser.json());
app.use('/api/employees', employeeRoutes);
//this can only added after all ther router 
app.use(errorHandler);




connectDb()
    .then(() => { 
        console.log('DB connection Successful');
        app.listen(3000,() => console.log('server started at 3000'));
    })
    .catch(err => console.log(err));

/*
mhaquetuc
iuFftbFvv1iR3CkL*/